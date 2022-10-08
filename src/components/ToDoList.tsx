import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log("add to do", data.todo);
    setValue("todo", "");
  };

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
      <ul></ul>
    </div>
  );
}

export default ToDoList;
