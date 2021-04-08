import {useState, useEffect} from 'react';
// styled components
import { NoteContainer, List, Item, Content2, Icons } from '../../styled_components';
// images
import delIcon from '../../../img/delete.svg';
import editIcon from '../../../img/edit.svg';
// i18n tanslation
import { useTranslation } from 'react-i18next';
// components
import Loader from '../../loader';
import UpdateModal from '../../modals/updatemodal';
import DeleteModal from '../../modals/deletemodal';

var notesList;

const Notes = () => {
    // i18n
    const { t, i18n } = useTranslation();

    const [isVisible, setVisible] = useState(false);
    const [isPending, setPending] = useState(true);
    const [noteID, setNoteID] = useState(0);
    const [modalType, setModal] = useState('');

    const getNotes = () => {
        try {
            fetch('http://localhost:3333/notes')
            .then(response => response.json())
            .catch(err => console.log('can not fetch data', err))
            .then(data => {
                if (data) {
                    notesList = data;
                    setPending(false)
                }
            })
        } catch(err) {
            console.log('something went wrong',err)
        }
    }

    useEffect(() => {
        if (notesList === undefined ) {
            return getNotes()
        } return
    })

    const updateHandle = (e) => {
        setNoteID(e.target.id);
        setVisible(true);
        setModal('update');
    }

    const deleteHandle = (e) => {
        setNoteID(e.target.id);
        setVisible(true);
        setModal('delete');
    }

    const handleClose = () => {
        setVisible(false)
    }

    const Modal = () => {
        switch(modalType) {
            case 'update':
                return <UpdateModal isVisible={isVisible} handleClose={handleClose} noteID={noteID}/>;
            case 'delete':
                return <DeleteModal isVisible={isVisible} handleClose={handleClose} noteID={noteID}/>;
            default:
                return null;
        }
    }

    const ModalVisible = () => {
        if (isVisible === true) {
            return Modal();
        }
    }

    const Content = () =>{
        switch(isPending) {
            case true:
                return <Loader />;
            case false:
                return loadedContent();
        }
    }

    const loadedContent = () => {
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

    return(
        <Content2>
            {Content()}
        </Content2>
    )
}

export default Notes;