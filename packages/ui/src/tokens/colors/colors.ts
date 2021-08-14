import tinycolor from 'tinycolor2'
import { map } from 'ramda'

import './tinycolor-normalize'

// hues

export const hues = Object.freeze({
  salsa: '#E64C52',
  pumpkin: '#ED7F40',
  mango: '#FFB53D',
  banana: '#F2DC36',
  chartreuse: '#C9E42F',
  matcha: '#9BDD32',
  lime: '#3EC941',
  cabbage: '#27A87B',
  curacao: '#2C89AB',
  anchan: '#5579E6',
  iris: '#6658E3',
  grape: '#AE65E6',
  plum: '#D14F99',
})

export type HueNames = keyof typeof hues

export const hueNames = Object.keys(hues) as Array<HueNames>

// shades

export const shadeCodes = [
  'a50', 'a100', 'a200', 'a300', 'a400', 'a500', 'a600', 'a700', 'a800', 'a900', 'a950',
] as const

export type ShadeCodes = (typeof shadeCodes)[number]

export const shades: Record<HueNames, Partial<Record<ShadeCodes, string>>> =
  map(value => ({
    'a50': tinycolor(value).normalize(0.08).toHexString(),
    'a100': tinycolor(value).normalize(0.16).toHexString(),
    'a200': tinycolor(value).normalize(0.24).toHexString(),
    'a300': tinycolor(value).normalize(0.32).toHexString(),
    'a400': tinycolor(value).normalize(0.4).toHexString(),
    'a500': tinycolor(value).normalize(0.5).toHexString(),
    'a600': tinycolor(value).normalize(0.6).toHexString(),
    'a700': tinycolor(value).normalize(0.68).toHexString(),
    'a800': tinycolor(value).normalize(0.76).toHexString(),
    'a900': tinycolor(value).normalize(0.84).toHexString(),
    'a950': tinycolor(value).normalize(0.92).toHexString(),
  }), hues)

// themes

export const themes = {
  light: {},
  dark: {},
  amoled: {},
} as const

export type ThemeNames = keyof typeof themes
