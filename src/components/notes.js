import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SectionWrap, NoteContainer, List,Item} from './styled_components';
import delIcon from '../img/delete.svg';
import editIcon from '../img/edit.svg';

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
    const [isPending, setPending] = useState(true);

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

    const loadedContent = () => {
        console.log('loaded content',NotesList);
        return(
            <List>
                {NotesList.map((data, i) => (
                    <NoteContainer>
                        <Item  key={i} id={data.id}>{data.title}</Item>
                            <NoteContainer icons>
                                <Icons src={editIcon} id={data.id} title='edit note'/>
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