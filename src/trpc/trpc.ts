import { initTRPC } from "@trpc/server";

// initTRPC을 사용하여 tRPC 서버를 초기화
const t = initTRPC.context().create();

// tRPC 서버의 라우터와 프로시저를 내보내기
export const router = t.router;
export const publicProcedure = t.procedure;
