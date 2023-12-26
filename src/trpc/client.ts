import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from ".";

// createTRPCReact 함수를 사용하여 tRPC 클라이언트를 생성
export const trpc = createTRPCReact<AppRouter>({});
