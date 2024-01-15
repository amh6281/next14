import dotenv from "dotenv";
import path from "path";
import type { InitOptions } from "payload/config";
import payload, { Payload } from "payload";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

// 캐시 생성
let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

// payload 클라이언트 초기화 및 반환
export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is missing");
  }

  // 캐시된 클라이언트 반환
  if (cached.client) {
    return cached.client;
  }

  // 초기화 프로세스 시작
  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    // 클라이언트 초기화
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }

  // 캐시된 클라이언트 반환
  return cached.client;
};
