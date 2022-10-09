import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todosState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todosState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { id: Date.now(), text: todo, category: "TODO" },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("todo", { required: "Write a list" })}
        placeholder="Write a list"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;
