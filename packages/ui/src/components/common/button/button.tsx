import React from 'react'

import { stitches } from '../../../config/stitches'

export const Button = stitches.styled('button', {
  ':hover': {

  },
  ':focus': {

  },
  ':active': {

  },
  ':disabled': {

  },
  variants: {
    size: {
      small: {},
      medium: {},
      large: {}
    },
    kind: {
      button: {},
      ghost: {},
      invisible: {},
    },
  },
  defaultVariants: {
    size: 'medium',
    kind: 'button',
  }
})
