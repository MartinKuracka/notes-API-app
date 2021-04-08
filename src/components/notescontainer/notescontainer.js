import {useState} from 'react';
// styled components
import { Button } from '../styled_components';
// cmponents
import Notes from './notes/notes';
import AddNote from '../modals/modal_content/addnote/addnote';
// Modal
import Rodal from 'rodal';
// i18n translation
import { useTranslation } from 'react-i18next';

const NotesContainer = () => {

    const [isVisible, setVisible] = useState(false)
    const { t, i18n } = useTranslation();

    const handleAddNote = () => {
        setVisible(true);
    }

    const handleClose = () => {
        setVisible(false)
    }

    return(
        <>
        <Rodal visible={isVisible} onClose={handleClose} height={40} showCloseButton={false} >
            <AddNote setVisible={setVisible}/>
        </Rodal>
        <Button onClick={() => handleAddNote()} >{t('Addbutton')}</Button>
        <Notes />
        </>
    )
}

export default NotesContainer;