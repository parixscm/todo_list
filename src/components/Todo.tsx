import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todosState } from "../atoms";

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
      {category !== Categories.TODO && (
        <button
          onClick={() => {
            onClick(Categories.TODO);
          }}
        >
          TODO
        </button>
      )}
      {category !== Categories.DOING && (
        <button
          onClick={() => {
            onClick(Categories.DOING);
          }}
        >
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button
          onClick={() => {
            onClick(Categories.DONE);
          }}
        >
          DONE
        </button>
      )}
    </li>
  );
}

export default Todo;
