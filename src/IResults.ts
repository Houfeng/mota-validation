import { states } from "./states";

export interface IResultItem {
  state: states;
  message: string;
}

export interface IResults extends IResultItem {
  time: number;
  items: { [name: string]: IResultItem };
}
