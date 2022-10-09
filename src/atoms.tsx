import { atom, selector } from "recoil";

export enum Categories {
  "TODO",
  "DOING",
  "DONE",
}

export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const todosState = atom<ITodo[]>({
  key: "todos",
  default: [],
});

export const todosSelector = selector({
  key: "todosSelector",
  get: ({ get }) => {
    const todos = get(todosState);
    const category = get(categoryState);

    // 🟡 select option value's type is a string.
    // 🟡 however, enum -> 0, 1, 2, ... which means the type is a number.
    // need to make them even!
    return todos.filter((todo) => todo.category === Number(category));
  },
});
