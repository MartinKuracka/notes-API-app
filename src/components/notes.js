import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SectionWrap} from './styled_components';
import Note from './note'

var NotesList;
const Content = styled(SectionWrap) `
    justify-content: flex-start;
    margin: 10px 0px;
    height: 3rem;
    width: 200px;
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
        getNotes();
    })

    const loadedContent = () => {
        console.log('loaded content',NotesList);
        return(
            <ul>
                {NotesList.map((data, i) => (
                    <li key={i} id={data.id}>{data.title}</li>
                ))}
            </ul>

        )

    }

    const pendingContent = () => {
        return(
            <h1>Data is loading</h1>
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