import { useState } from "react";

function TodoItem({ task, onDeleteTask }) {
  const [checkedFin, setCheckedFin] = useState(task.finished);
  const [time, setTime] = useState(task.finishedTime);



  const handleCheckFin = (event) => {
    setCheckedFin(event.target.checked);
    if (event.target.checked) {
      const currentTime = new Date().toLocaleString();
      setTime(currentTime);
    } else {
      setTime(null);
    }
  }

  const handleCheckDel = () => {
      onDeleteTask(task.startTime)
      setCheckedFin(false)
  };

  return (
    <tr>
      {Object.keys(task).map((key) => (
        <td className="todo-attribute text-center border border-4 w-80" key={key}>
          {(() => {
            if (key === "finished") {
              return (
                <input
                  type="checkbox"
                  checked={checkedFin}
                  onChange={handleCheckFin}
                />
              );
            } else if (key === "finishTime") {
              return checkedFin ? time || "Empty" : task[key] || "Empty";
            } else if (key === "del") {
              return (
                <input
                  type="checkbox"
                  checked={false}
                  onChange={handleCheckDel}
                />
              );
            } else {
              return task[key] === null ? "Empty" : task[key].toLocaleString();
            }
          })()}
        </td>
      ))}
    </tr>
  );
}

export default TodoItem;

