import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "", // 서버 URL 설정
  collections: [],
  routes: {
    admin: "/sell", // 관리자 경로
  },
  // 관리자 페이지 구성 설정
  admin: {
    bundler: webpackBundler(), // 웹팩 번들러 설정
    // 메타 설정
    meta: {
      titleSuffix: "- Next14App",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  // API 요청 제한 설정
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}), // 텍스트 에디터
  // MongoDB 데이터베이스 어댑터 사용
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  // TypeScript 설정. 출력 파일을 payload-types.ts로 설정
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
