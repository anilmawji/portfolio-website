import { ToolInfo } from "./data/ToolInfo"

type RgbString = `rgb(${number},${number},${number})`;
type RgbaString = `rgba(${number},${number},${number},${number})`;

type Post = {
  title: string;
  image: string;
  date: string;
  time?: string;
  body: string;
  link: string;
  tags: ToolInfo[];
}

export {
  type RgbString,
  type RgbaString,
  type Post
};