// modal
import Rodal from 'rodal';
// component
import DeleteNote from './modal_content/deletenote';


const DeleteModal = ({isVisible, handleClose, noteID}) => {
    console.log(`from modal ${noteID}`)
    return(
        <Rodal visible={isVisible} onClose={handleClose} height={40} showCloseButton={false}>
            <DeleteNote id={noteID}/>
        </Rodal>
    )
}

export default DeleteModal;