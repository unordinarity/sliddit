import tinycolor from 'tinycolor2'

tinycolor.prototype.normalize = function (
  target: number = 0.5,
  intensity: number = 0.25,
  threshold: number = 0.01,
) {
  let result = this
  let tries = 10

  while ((
    result.getLuminance() > target + threshold ||
    result.getLuminance() < target - threshold
  ) && (
    tries > 0
  )) {
    result = this.getLuminance() <= target
      ? this.lighten((target - this.getLuminance()) * 100 * intensity)
      : this.darken((this.getLuminance() - target) * 100 * intensity)
    tries -= 1
  }

  return result
}

declare module 'tinycolor2' {
  interface Instance {
    normalize: (target?: number, intensity?: number, threshold?: number) => Instance
  }
}
