import next from "next";

const PORT = Number(process.env.PORT) || 3000;

// Next.js 앱 생성 및 설정 (개발 환경, 포트)
export const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  port: PORT,
});

export const nextHandler = nextApp.getRequestHandler();
