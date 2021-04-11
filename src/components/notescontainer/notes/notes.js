import {useState, useEffect} from 'react';
// styled components
import { Content2 } from '../../styled_components';
// components
import Loader from '../../loader';
import LoadedContent from '../../notescontainer/notes/loadedcontent/loadedcontent';

var notesList;

const Notes = () => {

    const [isVisible, setVisible] = useState(false);
    const [isPending, setPending] = useState(true);
    const [noteID, setNoteID] = useState(0);
    const [modalType, setModal] = useState('');

    const getNotes = () => {
        try {
            fetch('http://localhost:3333/notes')
            .then(response => response.json())
            .catch(err => canNotFetch())
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

    const canNotFetch = () => {
        setTimeout(() => {
            setVisible(true);
            setPending(false);
            setModal('info'); 
        },1000)
        
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
        if (!notesList) {
            setPending(true);
        }
        setVisible(false)
    }

    const Content = () =>{
        switch(isPending) {
            case true:
                return <Loader />;
            case false:
                return <LoadedContent
                            isVisible={isVisible}
                            handleClose={handleClose}
                            noteID={noteID}
                            modalType={modalType}
                            notesList={notesList}
                            deleteHandle={deleteHandle}
                            updateHandle={updateHandle}
                        />;
            default:
                return null;
        }
    }

    return(
        <Content2>
            {Content()}
        </Content2>
    )
}

export default Notes;