import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express(); // Express 생성
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  // Payload 클라이언트 생성
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));

  // Next.js 앱 시작
  nextApp.prepare().then(() => {
    payload.logger.info("Next.js started");

    // Express 서버 시작
    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
