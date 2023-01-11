import { useDispatch } from "react-redux";
import { addTaskFormVisibleActions } from "../../store/addTaskFormVisible";

export default function AddButton() {
  const dispatch = useDispatch();
  const setIsVisible = () => {
    dispatch(addTaskFormVisibleActions.setIsVisible());
  };

  return (
    <button
      className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
      onClick={() => {
        setIsVisible();
      }}
    >
      Create
    </button>
  );
}
