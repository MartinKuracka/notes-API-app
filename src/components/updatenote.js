// styled components
import { ModalWrap, Modalinput, Button } from "./styled_components";

// API request
import UpdateNoteContent from '../API_controllers/updatenotecontent_req';

// i18n translation
import { useTranslation } from 'react-i18next';

const UpdateNote = ({id}) => {

    const { t, i18n } = useTranslation();

    const submitHandle = (e) => {
        UpdateNoteContent(id, e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)}>
            <Modalinput type='text' id='note' autoFocus/>
            <Button note type='submit'>{t('updatebutton')}</Button>
        </ModalWrap>
        </>
    )
}

export default UpdateNote;