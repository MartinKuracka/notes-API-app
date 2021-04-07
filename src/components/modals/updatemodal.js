import Rodal from 'rodal';
import UpdateNote from '../updatenote';


const UpdateModal = ({isVisible, handleClose, noteID}) => {
    return(
        <Rodal visible={isVisible} onClose={() => handleClose()} height={40} showCloseButton={false}>
            <UpdateNote id={noteID}/>
        </Rodal>
    )
}

export default UpdateModal