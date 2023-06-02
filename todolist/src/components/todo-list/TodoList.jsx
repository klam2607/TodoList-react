import TodoItem from "./TodoItem";



function TodoList({ tasks, onDeleteTask }) {
  return (
    <div className="w-full h-96  overflow-y-auto flex justify-center">
      <table className="w-3/4 border-collapse border table-auto mx-auto">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            <th className="border border-4 w-80">Task Name</th>
            <th className="border border-4 ">Priority</th>
            <th className="border border-4 ">Finished</th>
            <th className="border border-4 ">Start Time</th>
            <th className="border border-4 ">Finish Time</th>
            <th className="border border-4"> Delete</th>
          </tr>
        </thead>
      <tbody>
          {tasks.map((task) => (
            <TodoItem key={task.startTime} task={task} onDeleteTask={onDeleteTask}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
