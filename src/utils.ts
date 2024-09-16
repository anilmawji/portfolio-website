import { RgbString, RgbaString } from 'types';

/*#####################################################################*\
|#                                                                     #|
|#   MATH UTILS                                                        #|
|#                                                                     #|
\*#####################################################################*/

export function randRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function clamp(value: number, min: number, max: number): number {
  return value < min ? min : value > max ? max : value;
}

export function clampMin(value: number, min: number): number {
  return value < min ? min : value;
}

export function clampMax(value: number, max: number): number {
  return value > max ? max : value;
}

/*#####################################################################*\
|#                                                                     #|
|#   COMPONENT UTILS                                                   #|
|#                                                                     #|
\*#####################################################################*/

export function joinClassNames(...classNames: (string | undefined)[]): string {
  // Use filter to remove all undefined strings from the list of class names
  return classNames.filter(s => s).join(" ");
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

export function getCssValue(variableName: string, element?: HTMLElement | null): string {
  const targetElement = element || document.documentElement;
  
  return getComputedStyle(targetElement).getPropertyValue(`--${variableName}`).trim();
}

export function getNumericalCssValue(variableName: string, element?: HTMLElement | null): number {
  const numberValue = parseFloat(getCssValue(variableName, element));

  if (isNaN(numberValue)) {
    console.error(`Failed to parse ${variableName}: CSS variable is not a number value`);
    return 0; // Return a default value or throw an error based on your requirements
  }
  return numberValue;
}

export function isOverflowing(event: HTMLElement): boolean {
  return event.offsetHeight < event.scrollHeight || event.offsetWidth < event.scrollWidth;
}

export function readingTime(text: string, wpm: number = 225): string {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time >= 1 ? time.toString() + " min" : "Less than 1 min";
}

/*#####################################################################*\
|#                                                                     #|
|#   COLOR UTILS                                                       #|
|#                                                                     #|
\*#####################################################################*/

export function rgb(r: number, g: number, b: number): RgbString {
  return `rgb(${r},${g},${b})`;
}

export function rgba(r: number, g: number, b: number, a: number): RgbaString {
  return `rgba(${r},${g},${b},${a})`;
}

export function hexToRgb(hexString: string) {
  const { style } = new Option();
  style.color = hexString;

  return style.color;
}

export function rgbToHex(r: number, g: number, b: number) {
  return `#${rgbComponentToHex(r)}${rgbComponentToHex(g)}${rgbComponentToHex(b)};`;
}

export function rgbComponentToHex(c: number): string {
  if (c < 0 || c > 255) {
    console.warn(`RGB component ${c} out of range: must be between 0 and 255`);
  }
  return c.toString(16).padStart(2, '0');
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

// Functions to lighten/darken/blend RGB colors based on a given percentage p
// Optimized for speed instead of readability
// Full credit goes to Pimp Trizkit https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/73660199#73660199

export function rgbLinearBlend(p: number, c0: string, c1: string): string {
  var i=parseInt,r=Math.round,P=1-p,[a,b,c,d]=c0.split(","),[e,f,g,h]=c1.split(","),x=d||h,j=x?","+(!d?h:!h?d:r((parseFloat(d)*P+parseFloat(h)*p)*1000)/1000+")"):")";
  return"rgb"+(x?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+i(e[3]=="a"?e.slice(5):e.slice(4))*p)+","+r(i(b)*P+i(f)*p)+","+r(i(c)*P+i(g)*p)+j;
}

export function rgbLinearShade(p: number, c: string): string {
  var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P2=P?1+p:1-p;
  return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P2+t)+","+r(i(b)*P2+t)+","+r(i(c)*P2+t)+(d?","+d:")");
}

export function rgbLogBlend(p: number, c0: string, c1: string): string {
  var i=parseInt,r=Math.round,P=1-p,[a,b,c,d]=c0.split(","),[e,f,g,h]=c1.split(","),x=d||h,j=x?","+(!d?h:!h?d:r((parseFloat(d)*P+parseFloat(h)*p)*1000)/1000+")"):")";
  return"rgb"+(x?"a(":"(")+r((P*i(a[3]=="a"?a.slice(5):a.slice(4))**2+p*i(e[3]=="a"?e.slice(5):e.slice(4))**2)**0.5)+","+r((P*i(b)**2+p*i(f)**2)**0.5)+","+r((P*i(c)**2+p*i(g)**2)**0.5)+j;
}

export function rgbLogShade(p: number, c: string): string {
  var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:p*255**2,P2=P?1+p:1-p;
  return"rgb"+(d?"a(":"(")+r((P2*i(a[3]=="a"?a.slice(5):a.slice(4))**2+t)**0.5)+","+r((P2*i(b)**2+t)**0.5)+","+r((P2*i(c)**2+t)**0.5)+(d?","+d:")");
}

/*#####################################################################*\
|#                                                                     #|
|#   STRING UTILS                                                      #|
|#                                                                     #|
\*#####################################################################*/

export function toTitleCase(str: string): string {
  return str.length === 0 ? "" : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function removeHash(url: string): string {
  const hashIndex = url.indexOf('#');

  return hashIndex === -1 ? url : url.substring(0, hashIndex);
}

export function urlsOnSamePage(url1: string, url2: string): boolean {
  return removeHash(url1) === removeHash(url2);
}