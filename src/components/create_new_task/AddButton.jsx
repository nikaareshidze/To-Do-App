import { useDispatch, useSelector } from "react-redux";
import { addTaskFormVisibleActions } from "../../store/addTaskFormVisible";

export default function AddButton() {
  const dispatch = useDispatch();
  const setIsVisible = () => {
    dispatch(addTaskFormVisibleActions.setIsVisible());
  };

  const { isDark } = useSelector((state) => state.darkModeSlice);
  const textColor = isDark ? "text-black" : "text-white";
  const bgColor = isDark ? "bg-white" : "bg-black";

  return (
    <button
      className={`inline-block px-6 py-2.5 ${bgColor} ${textColor} font-medium text-xs leading-tight uppercase rounded shadow-md hover:${bgColor} hover:shadow-lg focus:${bgColor} focus:shadow-lg focus:outline-none focus:ring-0 active:${bgColor} active:shadow-lg transition duration-150 ease-in-out`}
      onClick={() => {
        setIsVisible();
      }}
    >
      Create
    </button>
  );
}
