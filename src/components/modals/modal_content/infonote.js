// styled components
import { ModalWrap } from "../../styled_components";
// i18n translation
import { useTranslation } from 'react-i18next';

const AddNote = ({setVisible, message}) => {
    console.log(message)
    // i18n
    const { t } = useTranslation();

    return(
        <>
        <ModalWrap title='modal'>
            <h3>{t('servermsg')}</h3>
        </ModalWrap>
        </>
    )
}

export default AddNote;