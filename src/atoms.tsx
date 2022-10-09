import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
  category: "DONE" | "DOING" | "TODO";
}

export const todosState = atom<ITodo[]>({
  key: "todos",
  default: [],
});
