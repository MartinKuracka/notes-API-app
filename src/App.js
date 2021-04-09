// i18n translation
import './i18n';
// styled components
import { SectionWrap, Image, NotesWrap} from './components/styled_components';
// Components
import Navbar from './components/navbar/navbar';
import NotesContainer from './components/notescontainer/notescontainer';
// images
import Img from './img/notebook.jpg';

function App() {
  return (
    <>
      <Image src={Img} />
      <Navbar />
      <SectionWrap>
        <NotesWrap>
          <NotesContainer />
        </NotesWrap>
      </SectionWrap>
    </>
  );
}

export default App;