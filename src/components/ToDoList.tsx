import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  todo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: "DONE" | "DOING" | "TODO";
}

const todosState = atom<ITodo[]>({
  key: "todos",
  default: [],
});

function ToDoList() {
  const [todos, setTodos] = useRecoilState(todosState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { id: Date.now(), text: todo, category: "TODO" },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  console.log(todos);

  return (
    <div>
      <h1>Lists you should do</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", { required: "Write a list" })}
          placeholder="Write a list"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
