// Styled components
import {NoteContainer, Item, Icons, List} from '../../../styled_components';
// components
import Modal from '../../../modals/modal';
import delIcon from '../../../../img/delete.svg';
import editIcon from '../../../../img/edit.svg';
// i18n tanslation
import { useTranslation } from 'react-i18next';

const LoadedContent = ({isVisible, handleClose, noteID, modalType, notesList, updateHandle, deleteHandle}) => {

    const { t } = useTranslation();

    const ModalVisible = () => {
        if (isVisible === true) {
            return <Modal isVisible={isVisible} handleClose={handleClose} noteID={noteID} modalType={modalType}/>
        }
    }

    return(
        <List>
            {ModalVisible()}
            {notesList.map((data, i) => (
                <NoteContainer>
                    <Item  key={i} id={data.id}>{data.title}</Item>
                        <NoteContainer icons>
                            <Icons src={editIcon} id={data.id} title={t('editbutton')} onClick={e => updateHandle(e)}/>
                            <Icons src={delIcon} id={data.id} title={t('deleteicon')} onClick={e => deleteHandle(e)}/>
                        </NoteContainer>
                </NoteContainer>
            ))}
        </List>
    )
}

export default LoadedContent