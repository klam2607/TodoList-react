import { useState } from "react";


function AddTaskForm({onAddTask}) {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSelectChange = (event) => {
    setPriority(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      name: taskName,
      priority: priority,
      finished: false,
      startTime: new Date(),
      finishTime: null,
      del: false
    };
    onAddTask(newTask)
    setTaskName('');
    setPriority('low');
  };
  

    return (
      <div className="flex flex-col items-center justify-center p-5">
        <div className="flex items-center space-x-4 mb-4">
          <input
            className="border border-green-500 border-2 px-3 py-1 rounded-lg text-sm"
            type="text"
            name="taskName"
            placeholder="Task Name"
            value={taskName}
            onChange={handleInputChange}
            required
          />
          <select 
            className="border border-green-500 border-2 px-3 py-1 rounded-lg text-sm"
            value={priority}
            onChange={handleSelectChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button 
            className="border border-green-500 border-2 px-3 py-1 rounded-lg text-white bg-green-500 hover:bg-green-600"
            onClick={handleAddTask}
            >
            Add Task
          </button>
        </div>
      </div>
    );
  }
  
  export default AddTaskForm;
  
