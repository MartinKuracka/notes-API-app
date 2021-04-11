// modal
import Rodal from 'rodal';
// component
import InfoNote from '../modal_content/infonote';

const AddModal = ({isVisible, handleClose, message}) => {
    return( 
        <Rodal visible={isVisible} onClose={handleClose} height={40} showCloseButton={false}>
            <InfoNote message={message}/>
        </Rodal>
    )
}

export default AddModal;