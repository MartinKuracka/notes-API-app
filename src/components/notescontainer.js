import {useState} from 'react';
import { Button } from '../components/styled_components';
import Notes from '../components/notes';
import AddNote from '../components/addnote';
import Rodal from 'rodal';
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
            <AddNote />
        </Rodal>
        <Button onClick={() => handleAddNote()} >{t('Addbutton')}</Button>
        <Notes />
        </>
    )
}

export default NotesContainer;