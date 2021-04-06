import {useState} from 'react';
import { ModalWrap, Modalinput, Button } from "./styled_components";
import UpdateNoteContent from '../API_controllers/updatenotecontent';

const UpdateNote = ({id}) => {

    const [noteValue, setNoteValue] = useState('');

    const submitHandle = (e) => {
        // e.preventDefault();
        console.log('id is:', id);
        console.log('value is:', e.target[0].value);
        UpdateNoteContent(id, e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)}>
            <Modalinput type='text' id='note'/>
            <Button note type='submit'>UPDATE</Button>
        </ModalWrap>
        </>
    )
}




export default UpdateNote;