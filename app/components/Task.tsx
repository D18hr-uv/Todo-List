"use client";
import { ITask } from "@/types/tasks";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

interface TaskProps {
    task : ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <tr key= {task.id}>
        <td>{task.text}</td>
        <td className="flex gap-4">
          <EditTask task={task} />
          <DeleteTask task={task} />
          
        </td>
    </tr>
  )
}

export default Task;