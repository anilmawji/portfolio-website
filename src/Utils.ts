/*#####################################################################*\
|#                                                                     #|
|#   MATH UTILS                                                        #|
|#                                                                     #|
\*#####################################################################*/

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

/*#####################################################################*\
|#                                                                     #|
|#   COMPONENT UTILS                                                   #|
|#                                                                     #|
\*#####################################################################*/

export function timeout(delay: number): Promise<void> {
  return new Promise(res => setTimeout(res, delay));
}

export function toPixels(amount: string | number): string {
  if (typeof amount === "number") {
    return amount.toString() + "px";
  }
  return amount;
}

export function getCssValue(element: HTMLElement, variableName: string): string {
  return getComputedStyle(element).getPropertyValue(`--${variableName}`).trim();
}

export function getNumericalCssValue(element: HTMLElement, variableName: string): number {
  const numberValue = parseFloat(getCssValue(element, variableName));

  if (isNaN(numberValue)) {
    console.error(`Failed to parse ${variableName}: CSS variable is not a number value`);
  }
  return numberValue;
}

export function isOverflowing(event: HTMLElement) {
  return event.offsetHeight < event.scrollHeight || event.offsetWidth < event.scrollWidth;
}

export function readingTime(text: string, wpm: number = 225): string {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time >= 1 ? time.toString() + " min" : "Less than 1 min";
}

export function joinClassNames(...classNames: (string | undefined)[]): string {
  // Use filter to remove all undefined strings from the list of class names
  return classNames.filter(s => s).join(" ").trim();
}

/*#####################################################################*\
|#                                                                     #|
|#   COLOR UTILS                                                       #|
|#                                                                     #|
\*#####################################################################*/

export function hexToRgb(hexString: string) {
  const { style } = new Option();
  style.color = hexString;

  return style.color;
}

export function rgbComponentToHex(c: number) {
  const hex = c.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + rgbComponentToHex(r) + rgbComponentToHex(g) + rgbComponentToHex(b);
}

export function rgbToRgba(rgbString: string, alpha: number): string {
  return rgbString.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
}

export function isValidCssColor(str: string): boolean {
  if (CSS.supports('color', str)) {
    return true
  }
  console.warn(`${str} is not a valid CSS color`);

  return false;
}

// Cuta out the 'rgb(' and ')' part of the string
export function getRgbColorValues(rgbString: string): string {
  return rgbString.substring(4, rgbString.length - 1);
}
