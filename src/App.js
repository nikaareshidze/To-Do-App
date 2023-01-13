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
          <Filter />
          <AddButton />
        </div>
        <div className="flex justify-between">
          <MyTasks />
          <AddTaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
