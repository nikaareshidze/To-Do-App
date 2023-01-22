import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import AddButton from "./components/create_new_task/AddButton";
import AddTaskForm from "./components/create_new_task/AddTaskForm";
import MyTasks from "./components/my_tasks_list/MyTasks";

import { useSelector } from "react-redux";

function App() {
  const { isDark } = useSelector((state) => state.darkModeSlice);
  const bgColor = isDark ? "bg-black" : "bg-[#e1e3e4]";

  return (
    <div className={`w-full min-h-screen ${bgColor}`}>
      <div className="p-10">
        <Header />
        <div className="flex justify-between mb-8">
          <div className="max-[750px]:hidden">
            <Filter />
          </div>
          <AddButton />
        </div>
        <div className="flex min-[1099px]:justify-between max-[1099px]:flex-col-reverse">
          <div className="w-full max-[1099px]:mt-10">
            <MyTasks />
          </div>
          <AddTaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
