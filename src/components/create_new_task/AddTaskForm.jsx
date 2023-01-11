import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { toDoListActions } from "../../store/toDoListSlice";

export default function AddTaskForm() {
  const { toDoList } = useSelector((state) => state.toDoListSlice);

  const dispatch = useDispatch();
  const setToDoList = (payload) => {
    dispatch(toDoListActions.setToDoList(payload));
  };

  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = (data) => {
    setToDoList(data);
    resetField("title");
    resetField("status", { defaultValue: "Not Started" });
    resetField("deadline");
    resetField("description");
  };

  console.log(toDoList);

  return (
    <form
      className="flex flex-col gap-y-4 w-fit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        placeholder="Project Name"
        className="bg-transparent text-black font-bold placeholder:text-black italic underline"
        {...register("title")}
      />

      <div className="flex">
        <h1 className="w-48">Status</h1>
        <select
          name="status-option"
          className="bg-transparent text-black"
          {...register("status")}
        >
          <option value="Not Started">Not started</option>
          <option value="In Progress">In progress</option>
          <option value="Plan">Plan</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div className="flex">
        <h1 className="w-48">Due Date</h1>
        <input
          type="date"
          placeholder="Due Date"
          className="bg-transparent text-black"
          {...register("deadline")}
        />
      </div>

      <div className="flex">
        <h1 className="w-48">Description</h1>
        <textarea
          placeholder="Add description"
          className="bg-transparent text-black"
          {...register("description")}
        />
      </div>

      <input
        type="submit"
        className="inline-block px-6 py-2.5 cursor-pointer bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
      />
    </form>
  );
}
