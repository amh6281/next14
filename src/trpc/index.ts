import { publicProcedure, router } from "./trpc";

// tRPC의 router 함수를 사용하여 애플리케이션의 라우터를 정의
export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "hello";
  }),
});

export type AppRouter = typeof appRouter;
