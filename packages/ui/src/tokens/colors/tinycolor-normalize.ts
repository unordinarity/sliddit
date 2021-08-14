import tinycolor from 'tinycolor2'

tinycolor.prototype.normalize = function (
  target: number = 0.5,
  intensity: number = 0.25,
  threshold: number = 0.01,
  initialColorImportance = 0.2,
  overlap: number = 0.02
) {
  const initialValue = this
  let result = this
  let tries = 20

  const targetSpecified = target +
    initialColorImportance *
    Math.max(initialValue.getLuminance() - 0.5, 0)

  while ((
    result.getLuminance() > targetSpecified + threshold ||
    result.getLuminance() < targetSpecified - threshold
  ) && (
    tries > 0
  )) {
    result = this.getLuminance() <= targetSpecified
      ? this.lighten((targetSpecified - this.getLuminance() + overlap) * 100 * intensity)
      : this.darken((this.getLuminance() - targetSpecified + overlap) * 100 * intensity)
    tries -= 1
  }

  return result
}

declare module 'tinycolor2' {
  interface Instance {
    normalize: (
      target?: number,
      intensity?: number,
      threshold?: number,
      initialColorImportance?: number,
      overlap?: number,
    ) => Instance
  }
}
