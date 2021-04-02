import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SectionWrap, NoteContainer, List,Item} from './styled_components';

var NotesList;

const Content = styled(SectionWrap) `
    justify-content: flex-start;
    margin: 30px 0px;
    width: 500px;
    border-radius: 1rem;
`
const Notes = () => {
    const [isPending, setPending] = useState(true);

    const getNotes = () => {
        try {
            fetch('https://private-anon-2d96bebd72-note10.apiary-mock.com/notes')
            .then(response => response.json())
            .catch(err => console.log('cano not fetch data', err))
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