
interface ModalProps{
    modalOpen : boolean;
    setModalOpen: (open : boolean) => boolean | void;
    children: React.ReactNode
}


const Modal:React.FC<ModalProps> = ({modalOpen, setModalOpen,children}) => {
    return (
        <dialog id="my_modal_3" className= {`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box retative">
                <label 
                    onClick={() => setModalOpen(false)}
                    className='btn btn-sm btn-circle absolute right-2 top-2'
                >
                    X
                </label>

                {children}   
            </div>
        </dialog>
    )
}

export default Modal