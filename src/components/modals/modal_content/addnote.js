// styled components
import { ModalWrap, Modalinput, Button } from "../../styled_components";
// API request
import SubmitNote from '../../../API_controllers/submitnewnote_req';
// i18n translation
import { useTranslation } from 'react-i18next';

const AddNote = ({setVisible}) => {
    // i18n
    const { t } = useTranslation();

    const submitHandle = (e) => {
        if (e.target[0].value === undefined) {
            setVisible(false);
            return console.log('empty note can not be submitted');
        }
        SubmitNote(e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)} title='modal'>
            <Modalinput type='text' id='note' autoFocus title='modalInput'/>
            <Button note type='submit' title='submitBtn'>{t('Addbutton')}</Button>
        </ModalWrap>
        </>
    )
}

export default AddNote;