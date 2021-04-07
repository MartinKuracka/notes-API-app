import {useState} from 'react';
// i18n translation
import './i18n';
import { useTranslation } from 'react-i18next';
// styled components
import styled from 'styled-components';
import {Button, SectionWrap, Image, NotesWrap} from './components/styled_components';
// Components
import Navbar from './components/navbar';
import NotesContainer from './components/notescontainer';
// Modal styling
import '../node_modules/rodal/lib/rodal.css';
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
