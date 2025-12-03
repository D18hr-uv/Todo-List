import { CiSquarePlus } from "react-icons/ci";

const AddTask = () => {
    return <div>
        <button className="btn btn-primary w-full">Add New Task <CiSquarePlus className="ml-2" size={18}/></button>
    </div>;
};
  
export default AddTask;