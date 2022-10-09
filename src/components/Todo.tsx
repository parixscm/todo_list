import { useSetRecoilState } from "recoil";
import { ITodo, todosState } from "../atoms";

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todosState);
  const onClick = (newCategory: ITodo["category"]) => {
    setTodos((oldTodos) => {
      const targetIdx = oldTodos.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: newCategory };
      return [
        ...oldTodos.slice(0, targetIdx),
        newTodo,
        ...oldTodos.slice(targetIdx + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "TODO" && (
        <button
          onClick={() => {
            onClick("TODO");
          }}
        >
          TODO
        </button>
      )}
      {category !== "DOING" && (
        <button
          onClick={() => {
            onClick("DOING");
          }}
        >
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button
          onClick={() => {
            onClick("DONE");
          }}
        >
          DONE
        </button>
      )}
    </li>
  );
}

export default Todo;
