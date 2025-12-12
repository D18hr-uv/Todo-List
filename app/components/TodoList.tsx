import {ITask} from "@/types/tasks";

interface TodoListProps{
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key= {task.id}>
              <td>{task.text}</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList