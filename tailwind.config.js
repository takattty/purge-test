const colors = require('tailwindcss/colors')
const floatArray = []
for (let i = 0.1; i <= 50; i = i + 0.1) {
  floatArray.push(Number((i * 10).toFixed()))
}
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './components/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        ...[...Array(500)].reduce((m, _, i) => {
          m[`${i}px`] = `${i}px`
          return m
        }, {}),
        ...[...Array(120)].reduce((n, _, i) => {
          n[`${i}per`] = `${i}%`
          return n
        }, {}),
        ...[...Array(1000)].reduce((a, _, i) => {
          a[`${i / 10}rem`] = `${i / 10}rem`
          return a
        }, {}),
      },
      fontSize: {
        ...[...Array(100)].reduce((m, _, i) => {
          m[`${i}px`] = `${i}px`
          return m
        }, {}),
        ...[...Array(120)].reduce((n, _, i) => {
          n[`${i}per`] = `${i}%`
          return n
        }, {}),
        ...[...Array(1000)].reduce((a, _, i) => {
          a[`${i / 10}rem`] = `${i / 10}rem`
          return a
        }, {}),
      },
      // rounded-{}
      borderRadius: {
        ...[...Array(30)].reduce((m, _, i) => {
          m[`${i}px`] = `${i}px`
          return m
        }, {}),
        ...[...Array(60)].reduce((n, _, i) => {
          n[`${i}per`] = `${i}%`
          return n
        }, {}),
      },
      // tracking-{}
      letterSpacing: {
        ...[...Array(15)].reduce((m, _, i) => {
          m[`${i}px`] = `${i}px`
          return m
        }, {}),
        ...[...Array(15)].reduce((n, _, i) => {
          n[`${i}rem`] = `${i}rem`
          return n
        }, {}),
      },
      lineHeight: {
        ...[...Array(100)].reduce((m, _, i) => {
          m[`${i / 10}`] = `${i / 10}`
          return m
        }, {}),
        ...[...Array(100)].reduce((m, _, i) => {
          m[`${i}px`] = `${i}px`
          return m
        }, {}),
      },
      inset: {
        ...[...Array(100)].reduce((m, _, i) => {
          m[`${i}px`] = `${i}px`
          return m
        }, {}),
      },
      maxWidth: {
        '1170px': '1170px',
      },
      gridTemplateColumns: {
        '4-1': 'repeat(4, 1fr)',
        '2-1': '2fr 1fr',
      },
      gridTemplateRows: {
        '3-130px': 'repeat(3,130px)',
      },
      fontFamily: {
        pd: ['游ゴシック', 'Yu Gothic', 'Noto Sans JP', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'ＭＳ Ｐゴシック'],
      },
      transitionTimingFunction: {
        in_out_expo: 'cubic-bezier(0.42, 0, 0.58, 1.0)',
      },
    },
    screens: {
      tablet: '960px',
    },
    colors: {
      707070: '#707070',
      '063a80': '#063a80',
      e6e6e6: '#e6e6e6',
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
