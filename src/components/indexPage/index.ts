export { default as Main } from "./main";
export { default as WorkGrid } from "./workGrid";
export { default as Work } from "./workGrid";

export interface Work {
  id: number;
  title: string;
  description: string;
  href: string;
}
