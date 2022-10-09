import { ITodo } from "../atoms";

function Todo({ text }: ITodo) {
  return (
    <li>
      <span>{text}</span>
      <button>TODO</button>
      <button>DOING</button>
      <button>DONE</button>
    </li>
  );
}

export default Todo;
