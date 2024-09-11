type RgbString = `rgb(${number},${number},${number})`;
type RgbaString = `rgba(${number},${number},${number},${number})`;

type ToolInfo = { name: string; color: RgbString; }

type Post = {
  title: string;
  image: string;
  date: string;
  time?: string;
  body: string;
  link: string;
  tags: (ToolInfo | string)[];
}

function isToolInfo(value: any): value is ToolInfo {
  return typeof value === 'object' &&
         value !== null &&
         typeof value.name === 'string' &&
         typeof value.color === 'string';
}

export {
  type RgbString,
  type RgbaString,
  type ToolInfo,
  type Post,
  isToolInfo
};