import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todosSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function ToDoList() {
  const todos = useRecoilValue(todosSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>Lists you should do</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>Todo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default ToDoList;
