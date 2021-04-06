import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SectionWrap, NoteContainer, List,Item} from './styled_components';
import delIcon from '../img/delete.svg';
import editIcon from '../img/edit.svg';
import UpdateNote from './updatenote';
import Rodal from 'rodal';
import '../../node_modules/rodal/lib/rodal.css';

var NotesList;

const Content = styled(SectionWrap) `
    justify-content: flex-start;
    margin: 30px 0px;
    width: 500px;
    border-radius: 1rem;
`
const Icons = styled.img `
    cursor: pointer;
`
const Notes = () => {

    const [isVisible, setVisible] = useState(false);
    const [isPending, setPending] = useState(true);
    const [noteID, setNoteID] = useState(0);
    // const [noteValue, setNoteValue] = useState('');

    const getNotes = () => {
        try {
            fetch('http://localhost:3333/notes')
            .then(response => response.json())
            .catch(err => console.log('can not fetch data', err))
            .then(data => {
                if (data) {
                    NotesList = data;
                    setPending(false)
                }
            })
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (NotesList === undefined ) {
            getNotes()
        } return
    })

    const updateHandle = (e) => {
        console.log('updated', e.target.id);
        setNoteID(e.target.id);
        setVisible(true);
    }

    const handleClose = () => {
      setVisible(false)
    }

    const loadedContent = () => {
        console.log('loaded content',NotesList);
        return(
            <List>
                <Rodal visible={isVisible} onClose={handleClose} height={40} showCloseButton={false}>
                   <UpdateNote id={noteID}/>
                </Rodal>
                {NotesList.map((data, i) => (
                    <NoteContainer>
                        <Item  key={i} id={data.id}>{data.title}</Item>
                            <NoteContainer icons>
                                <Icons src={editIcon} id={data.id} title='edit note' onClick={e => updateHandle(e)}/>
                                <Icons src={delIcon} id={data.id} title='delete note'/>
                            </NoteContainer>
                    </NoteContainer>
                ))}
            </List>
        )
    }

    const pendingContent = () => {
        return(
            <h2>Data is loading</h2>
        )
    }

    return(
            <>
            <Content>
                {isPending === true
                    ? pendingContent()
                    : loadedContent()
                }
            </Content>
            </>
    )
}

export default Notes;