import { ModalWrap, Modalinput, Button } from "./styled_components";
import DeleteNoteFromAPI from '../API_controllers/deletenote_req'

const DeleteNote = () => {

    const submitHandle = (e) => {
        DeleteNoteFromAPI(e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)} delete>
            <h3>Delete this note?</h3>
            <Button note type='submit'>DELETE</Button>
        </ModalWrap>
        </>
    )
}

export default DeleteNote;