// styled components
import { ModalWrap, Modalinput, Button } from "./styled_components";

// API request
import SubmitNote from '../API_controllers/submitnewnote_req';

// i18n translation
import { useTranslation } from 'react-i18next';

const AddNote = () => {

    const { t, i18n } = useTranslation();

    const submitHandle = (e) => {
        SubmitNote(e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)}>
            <Modalinput type='text' id='note' autoFocus/>
            <Button note type='submit'>{t('Addbutton')}</Button>
        </ModalWrap>
        </>
    )
}

export default AddNote;