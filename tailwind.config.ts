import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{base:'#11181b',surface:'#182125',raised:'#202c30',ink:'#e8ede9',muted:'#a4b3b4',accent:'#7bc7b4'},fontFamily:{sans:['Arial','sans-serif'],mono:['ui-monospace','SFMono-Regular','monospace']}}},plugins:[]} satisfies Config;
