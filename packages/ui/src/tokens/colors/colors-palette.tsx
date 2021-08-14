import React, { Fragment, FunctionComponent } from 'react'
import tinycolor from 'tinycolor2'

import { hueNames, shadeCodes, shades } from './colors'
import { stitches } from '../../config/stitches'

const PaletteBody = stitches.styled('div', {
  display: 'grid',
  gridTemplateRows: `auto repeat(${hueNames.length}, auto)`,
  gridTemplateColumns: `auto repeat(${shadeCodes.length}, auto)`,
  gap: '4px',
  justifyContent: 'center',
})

const PaletteTitle = stitches.styled('div', {
  width: '100%',
  height: '40px',
  padding: '0 4px',

  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '0.8rem',
  fontFamily: 'sans-serif',

  borderRadius: '20px',

  color: 'rgba(255, 255, 255, 0.8)'
})

const PaletteCell = stitches.styled('div', {
  width: '40px',
  height: '40px',

  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '0.8rem',
  fontFamily: 'sans-serif',

  backgroundColor: 'white',
  borderRadius: '20px',

  variants: {
    scheme: {
      light: { color: 'rgba(0, 0, 0, 0.72)' },
      dark: { color: 'rgba(255, 255, 255, 0.8)' }
    },
  }
})

export const ColorsPalette: FunctionComponent = () => (
  <PaletteBody>
    <PaletteTitle>
      hue \ shade
    </PaletteTitle>
    {shadeCodes.map(shadeCode => (
      <PaletteTitle key={shadeCode}>
        {shadeCode}
      </PaletteTitle>
    ))}
    {hueNames.map(hue => (
      <Fragment key={hue}>
        <PaletteTitle
          css={{
            color: shades[hue]['a500']
          }}>
          {hue}
        </PaletteTitle>
        {shadeCodes.map(shade => (
          <PaletteCell
            key={[hue, shade].join('-')}
            scheme={
              tinycolor(shades[hue][shade]).isLight() ? 'light' : 'dark'
            }
            css={{
              backgroundColor: shades[hue][shade]
            }}>
          </PaletteCell>
        ))}
      </Fragment>
    ))}
  </PaletteBody>
)
