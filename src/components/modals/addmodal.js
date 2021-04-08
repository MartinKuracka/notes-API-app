// modal
import Rodal from 'rodal';
// component
import AddNote from './modal_content/addnote/addnote';

const AddModal = ({isVisible, handleClose}) => {
    return( 
        <Rodal visible={isVisible} onClose={handleClose} height={40} showCloseButton={false}>
            <AddNote />
        </Rodal>
    )
}

export default AddModal;