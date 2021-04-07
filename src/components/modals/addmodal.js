import Rodal from 'rodal';
import AddNote from '../../components/addnote';

const AddModal = ({isVisible, handleClose}) => {
    return( 
        <Rodal visible={isVisible} onClose={handleClose} height={40} showCloseButton={false}>
            <AddNote />
        </Rodal>
    )
}

export default AddModal;