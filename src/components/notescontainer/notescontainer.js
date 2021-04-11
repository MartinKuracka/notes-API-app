import {useState} from 'react';
// styled components
import { Button } from '../styled_components';
// cmponents
import Notes from './notes/notes';
// Modal
import Modal from '../modals/modal'
import '../../../node_modules/rodal/lib/rodal.css'
// i18n translation
import { useTranslation } from 'react-i18next';

const NotesContainer = () => {

    const [isVisible, setVisible] = useState(false)
    const { t } = useTranslation();

    const handleAddNote = () => {
        setVisible(true);
    }

    const handleClose = () => {
        setVisible(false)
    }

    const ModalVisible = () => {
        if (isVisible === true) {
            return <Modal isVisible={isVisible} handleClose={handleClose} modalType='addnote'/>
        }
    }

    return(
        <>
        {ModalVisible()}
        <Button onClick={() => handleAddNote()} >{t('Addbutton')}</Button>
        <Notes />
        </>
    )
}

export default NotesContainer;