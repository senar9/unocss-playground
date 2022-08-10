import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-fc cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  safelist: ['w-24', 'h-24'],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        // sans: 'DM Sans',
        // serif: 'DM Serif Display',
        // mono: 'DM Mono',
      },
    }),
  ],
  rules: [
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
  ],
  theme: {
    colors: {
      main: 'rgb(var(--main))',
      tgray: 'rgb(var(--tgray))',
      bgray: 'rgb(var(--bgray))',
      bk: 'rgb(var(--bk))',
      fc: '#fcfcfc',
      darkbg: 'rgb(var(--darkbg))',
      warn: '#FAAD14',
      error: '#FF4D4F',
      success: '#52C41A',
      common: '#40A9FF',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1500px',
    },
  },
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
