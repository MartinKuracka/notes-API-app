import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, SectionWrap, Image, ContentWrap, OverlayWrapper, NoteContainer} from './components/styled_components';
import Img from './img/notebook.jpg';
import Navbar from './components/navbar';
import Notes from './components/notes';
import Rodal from 'rodal';
import '../node_modules/rodal/lib/rodal.css';
import AddNote from './components/addnote'

const NotesWrap = styled(ContentWrap) `
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
function App() {

  const [isVisible, setVisible] = useState(false);

  const handleOnClick = () => {
    setVisible(true);
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Image src={Img} />
      <Navbar />
      <Rodal visible={isVisible} onClose={handleClose} height={40} showCloseButton={false}>
        <AddNote />
      </Rodal>
      <SectionWrap>
        <NotesWrap>
          <Button onClick={() => handleOnClick()} >ADD NEW</Button>
          <Notes />
        </NotesWrap>
      </SectionWrap>
    </>
  );
}

export default App;
