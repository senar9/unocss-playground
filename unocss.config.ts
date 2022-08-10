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
  shortcuts: [], // instead of @layer components
  safelist: [], // promise no tree shaking
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
      fc: '#fcfcfc',
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
