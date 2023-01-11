import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import AddButton from "./components/create_new_task/AddButton";
import AddTaskForm from "./components/create_new_task/AddTaskForm";
import MyTasks from "./components/my_tasks_list/MyTasks";

function App() {
  return (
    <div className="m-10">
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
  );
}

export default App;
