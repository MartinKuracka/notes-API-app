import UpdateModal from './modal_type/updatemodal';
import DeleteModal from './modal_type/deletemodal';
import AddModal from './modal_type/addmodal';
import InfoModal from './modal_type/infomodal';


const Modal = ({isVisible, handleClose, noteID, modalType}) => {
    switch(modalType) {
        case 'update':
            return <UpdateModal isVisible={isVisible} handleClose={handleClose} noteID={noteID}/>;
        case 'delete':
            return <DeleteModal isVisible={isVisible} handleClose={handleClose} noteID={noteID}/>;
        case 'addnote':
            return <AddModal isVisible={isVisible}  handleClose={handleClose}/>;
        case 'info':
            return <InfoModal isVisible={isVisible}  handleClose={handleClose}/>;
        default:
            return null;
    }
}

export default Modal;