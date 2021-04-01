import styled from 'styled-components';
import {Button, SectionWrap, Image, ContentWrap} from './components/styled_components';
import Img from './img/notebook.jpg';
import Navbar from './components/navbar';
import Notes from './components/notes'

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
          <Button>ADD NEW</Button>
          <Notes />
        </NotesWrap>
      </SectionWrap>
    </>
  );
}

export default App;
