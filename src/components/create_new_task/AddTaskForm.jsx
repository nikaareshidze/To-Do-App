import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { toDoListActions } from "../../store/toDoListSlice";
import { addTaskFormVisibleActions } from "../../store/addTaskFormVisible";

export default function AddTaskForm() {
  const { id } = useSelector((state) => state.toDoListSlice);
  const { isVisible } = useSelector((state) => state.addTaskFormVisibleSlice);

  const dispatch = useDispatch();
  const setToDoList = (payload) => {
    dispatch(toDoListActions.setToDoList(payload));
  };
  const increaseId = () => {
    dispatch(toDoListActions.increaseId());
  };
  const setIsVisible = () => {
    dispatch(addTaskFormVisibleActions.setIsVisible());
  };

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.id = id;
    setToDoList(data);
    resetField("title");
    resetField("status", { defaultValue: "Not Started" });
    resetField("deadline");
    resetField("description");
    setIsVisible();
    increaseId();
  };

  const { isDark } = useSelector((state) => state.darkModeSlice);
  const textColor = isDark ? "text-white" : "text-black";
  //const bgColor = isDark ? "bg-white" : "bg-black";

  return (
    <>
      {isVisible ? (
        <form
          className="flex flex-col gap-y-4 w-full md:w-fit"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Project Name"
            className={`bg-transparent ${textColor} font-bold placeholder:${textColor} italic underline`}
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-800 text-xs">This field is required</span>
          )}

          <div className="flex justify-between">
            <h1 className={`w-48 ${textColor}`}>Status</h1>
            <select
              name="status-option"
              className={`bg-transparent ${textColor}`}
              {...register("status")}
            >
              <option value="Not Started">Not started</option>
              <option value="In Progress">In progress</option>
              <option value="Plan">Plan</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="flex justify-between">
            <h1 className={`w-48 ${textColor}`}>Due Date</h1>
            <input
              type="date"
              placeholder="Due Date"
              className={`bg-transparent ${textColor}`}
              {...register("deadline")}
            />
          </div>

          <div className="flex justify-between">
            <h1 className={`w-48 ${textColor}`}>Description</h1>
            <textarea
              placeholder="Add description"
              className={`bg-transparent ${textColor} text-end`}
              {...register("description")}
            />
          </div>

          <input
            type="submit"
            className="inline-block px-6 py-2.5 cursor-pointer bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
          />
        </form>
      ) : (
        ""
      )}
    </>
  );
}
