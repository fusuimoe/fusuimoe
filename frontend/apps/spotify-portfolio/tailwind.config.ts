// tailwind config is required for editor support

import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './drivers/views/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [sharedConfig],
};

export default config;
