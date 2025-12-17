import { ITask } from "@/types/tasks"
import { FormEventHandler, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import Modal from "./Modal";
import { editTodo } from "@/api";
import { useRouter } from "next/navigation";

interface TaskProps {
    task : ITask
}

const EditTask:React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
    const [ openModalEdit, setopenModalEdit] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
            e.preventDefault();
            await editTodo({
                id : task.id,
                text: taskToEdit,
            })
    
            setopenModalEdit(false);
            router.refresh();
    }
  return (
    <div>
        <FiEdit3 onClick={() => setopenModalEdit(true)} cursor="pointer" className="text-blue-400" size={15} />
        
        <Modal modalOpen = {openModalEdit} setModalOpen = {setopenModalEdit}>
            <form onSubmit={handleSubmitEditTodo}>
                <h3 className="font-bold text-lg"> EDIT TASK</h3>
                <div className="modal-action">
                    <input 
                        value={taskToEdit}
                        onChange={e=> setTaskToEdit(e.target.value)}
                        type="text" 
                        placeholder="Type here" 
                        className="input input-bordered w-full" 
                    />
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </Modal>
    </div>
    
    

  )
}

export default EditTask;