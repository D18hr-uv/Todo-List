import { useState } from 'react'
import { FaTrashArrowUp } from 'react-icons/fa6'
import Modal from './Modal';
import { ITask } from '@/types/tasks';
import { useRouter } from 'next/navigation';
import { deleteTodo } from '@/api';

interface TaskProps {
    task : ITask
}

const DeleteTask:React.FC<TaskProps> = ({task}) =>{
    const [ openModalDeleted, setopenModalDeleted] = useState<boolean>(false);
    const router = useRouter();

    const handleDeleteTask = async (id : string) => {
    await deleteTodo(id);
    setopenModalDeleted(false);
    router.refresh();
  }
  return (
    <div>
        <FaTrashArrowUp onClick={ () => setopenModalDeleted(true)} cursor="pointer" className="text-red-400" size={15} />
        <Modal modalOpen = {openModalDeleted} setModalOpen = {setopenModalDeleted}>
            <h3 className="text-lg"> Do you really want to delete the task?</h3>
            <div className="modal-action">
                <button onClick={() => handleDeleteTask(task.id)} className="btn"> Yes</button>
            </div>
                
        </Modal>
    </div>
  )
}

export default DeleteTask;