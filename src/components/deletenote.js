// styled components
import { ModalWrap, Button, DelText } from "./styled_components";

// API request
import DeleteNoteFromAPI from '../API_controllers/deletenote_req';

// i18n translation
import { useTranslation } from 'react-i18next';

const DeleteNote = ({id}) => {

    const { t, i18n } = useTranslation();

    const submitHandle = (e) => {
        DeleteNoteFromAPI(id);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)} delete>
            <DelText>{t('deleteinfo')}</DelText>
            <Button note type='submit'>{t('deletebutton')}</Button>
        </ModalWrap>
        </>
    )
}

export default DeleteNote;