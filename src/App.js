import styled from 'styled-components';
import {Button, SectionWrap, Image, ContentWrap} from './components/styled_components';
import Img from './img/notebook.jpg';
import Navbar from './components/navbar';
import Notes from './components/notes';
import AddNote from './API_controllers/addnote';

const NotesWrap = styled(ContentWrap) `
  flex-direction: column;
  margin-top: 30px;
`
function App() {
  return (
    <>
      <Image src={Img} />
      <Navbar />
      <SectionWrap>
        <NotesWrap>
          <Button onClick={() => AddNote()}>ADD NEW</Button>
          <Notes />
        </NotesWrap>
      </SectionWrap>
    </>
  );
}

export default App;
