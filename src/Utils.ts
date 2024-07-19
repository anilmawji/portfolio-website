export function randRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function clamp(value: number, min: number, max: number) {
  return value < min ? min : value > max ? max : value;
}

export function clampMin(value: number, min: number) {
  return value < min ? min : value;
}

export function clampMax(value: number, max: number) {
  return value > max ? max : value;
}

export function timeout(delay: number): Promise<void> {
  return new Promise(res => setTimeout(res, delay));
}

export function toPixels(amount: string | number): string {
  if (typeof amount === "number") {
    return amount.toString() + "px";
  }
  return amount;
}

export function isValidCssColor(str: string): boolean {
  if (CSS.supports('color', str)) {
    return true
  }
  console.warn(`${str} is not a valid CSS color`);

  return false;
}

export function rgbToRgba(rgbString: string, alpha: number): string {
  return rgbString.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
}

// Cut out the 'rgb(' and ')' part of the string
export function getColorValues(rgbString: string): string {
  return rgbString.substring(4, rgbString.length - 1);
}