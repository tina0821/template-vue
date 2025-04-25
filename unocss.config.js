import { defineConfig, presetUno } from 'unocss';
import { presetGridSystem } from './src/assets/style/unocss.grid';

export default defineConfig({
  presets: [
    // 保有原本的unocss
    presetUno(),
    presetGridSystem(),
  ],

  theme: {
    colors: {
      /* 基本顏色設定
       * ./src/assets/style/main.css 記得設定相同的顏色
       */
      primary: '#6750A4',
      secondary: '#625B71',
      accent: '#7D5260',
      success: '#4CAF50',
      danger: '#B3261E',
      warning: '#F2B400',
      info: '#1C7ED6',
    },
    breakpoints: {
      xs: '384px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },

  // 多個unocss class包裝成一個
  shortcuts: [
    ['pointer', 'cursor-pointer select-none'],
    ['linkReset', 'decoration-none color-unset'],
    ['border', 'border-1 border-solid border-black'],
    ['flex-col', 'flex flex-col'],
  ],

  // 自定義class
  rules: [
    /** @example grid-cols-[auto|1fr] => grid-template-columns: auto 1fr; */
    [
      /^grid-cols-\[(\S+)\]$/,
      ([, s]) => ({ 'grid-template-columns': `${s.replace(/\|/g, ' ')}` }),
      { autocomplete: 'grid-cols-[auto|1fr]' },
    ],
    /** @example grid-cols-[auto|1fr] => grid-template-columns: auto 1fr; */
    [
      /^grid-rows-\[(\S+)\]$/,
      ([, s]) => ({ 'grid-template-rows': `${s.replace(/\|/g, ' ')}` }),
      { autocomplete: 'grid-rows-[auto|1fr]' },
    ],
    /** @example bgs-[100%] => background-size: 100% */
    [/^bgs-\[(.*)\]$/, ([, s]) => ({ 'background-size': s }), { autocomplete: 'bgs-[100%]' }],
  ],
});
