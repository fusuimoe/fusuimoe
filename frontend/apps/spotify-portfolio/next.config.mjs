import { fileURLToPath } from 'url';

import createJITI from 'jiti';

// jitiを用いた環境変数の評価
// https://env.t3.gg/docs/nextjs#validate-schema-on-build-(recommended)
const jiti = createJITI(fileURLToPath(import.meta.url));
jiti('./drivers/env/t3env.ts');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  env: {
    /**
     * tRPCで必要
     */
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  transpilePackages: ['@repo/ui'],
};

export default config;
