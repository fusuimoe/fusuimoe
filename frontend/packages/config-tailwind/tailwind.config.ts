import type { Config } from 'tailwindcss';

// contentは各パッケージに記載すること
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              // 長いURLをそのまま貼ると改行されないのを修正
              wordBreak: 'break-all',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    logs: !process.env.CI, // CI環境のログを抑制
  },
};
export default config;
