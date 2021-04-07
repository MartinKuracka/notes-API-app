import {useState, useEffect} from 'react';
import { NoteContainer, List, Item, Content2, Icons, Button } from './styled_components';
import delIcon from '../img/delete.svg';
import editIcon from '../img/edit.svg';
import '../../node_modules/rodal/lib/rodal.css';
import { useTranslation } from 'react-i18next';
import Loader from './loader';
import UpdateModal from '../components/modals/updatemodal';
import DeleteModal from '../components/modals/deletemodal';

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
            console.log(err)
        }
    }

    useEffect(() => {
        if (notesList === undefined ) {
            getNotes()
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

    const loadedContent = () => {
        return(
            <List>
                {isVisible === true
                    ? modalType === 'update'
                        ? <UpdateModal isVisible={isVisible} handleClose={handleClose} noteID={noteID}/>
                        : <DeleteModal isVisible={isVisible} handleClose={handleClose} noteID={noteID}/>
                        : null}
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
            <>
            <Content2>
                {isPending === true
                    ? <Loader />
                    : loadedContent()
                }
            </Content2>
            </>
    )
}

export default Notes;