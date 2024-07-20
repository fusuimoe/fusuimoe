import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * 環境変数の定義 configで評価すること
 * 全てstringで解釈されるためnumberはcoerceしている
 * @see https://env.t3.gg/docs/nextjs
 */
export const env = createEnv({
  server: {
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    SIGNIN_ALLOWED_EMAILS: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    SPOTIFY_PLAYLIST_ID: z.string(),
    HERO_MARKDOWN_FILENAME: z.string(),
    /**
     * Markdown取得用
     */
    GITHUB_PERSONAL_ACCESS_TOKEN: z.string(),
    /**
     * redis用
     */
    KV_URL: z.string(),
    /**
     * 暗号化に使う
     * `openssl rand 16 -hex`
     */
    ENCRYPTION_KEY: z.string(),
    REVALIDATE_SECONDS: z.coerce.number().default(3600),
  },
  client: {
    /** とりあえずプレイリストのlimitも兼ねている */
    NEXT_PUBLIC_SPOTIFY_LIBRARY_LIMIT: z.coerce.number().default(30),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SPOTIFY_LIBRARY_LIMIT:
      process.env.NEXT_PUBLIC_SPOTIFY_LIBRARY_LIMIT,
  },
});
