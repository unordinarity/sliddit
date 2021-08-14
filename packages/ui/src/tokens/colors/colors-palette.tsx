import React, { FunctionComponent } from 'react'
import tinycolor from 'tinycolor2'

import { hueNames, shadeCodes, shades } from './colors'
import { stitches } from '../../config/stitches'

const PaletteBody = stitches.styled('div', {
  display: 'grid',
  gridTemplateRows: `repeat(${hueNames.length}, auto)`,
  gridTemplateColumns: `repeat(${shadeCodes.length}, auto)`,
  gap: '4px',
  justifyContent: 'center',
})

const PaletteCell = stitches.styled('div', {
  width: '40px',
  height: '40px',
  borderRadius: '20px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '0.8rem',
  fontFamily: 'sans-serif',
  variants: {
    scheme: {
      light: { color: 'rgba(0, 0, 0, 0.72)' },
      dark: { color: 'rgba(255, 255, 255, 0.8)' }
    },
  }
})

export const ColorsPalette: FunctionComponent = () => (
  <PaletteBody>
    {hueNames.map(hue => (
      shadeCodes.map(shade => (
        <PaletteCell
          key={[hue, shade].join('-')}
          scheme={
            tinycolor(shades[hue][shade]).isLight() ? 'light' : 'dark'
          }
          css={{
            backgroundColor: shades[hue][shade]
          }}>
          {tinycolor(shades[hue][shade]).getBrightness().toFixed(0)}
        </PaletteCell>
      ))
    ))}
  </PaletteBody>
)
