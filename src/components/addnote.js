import { ModalWrap, Modalinput, Button } from "./styled_components";
import SubmitNote from '../API_controllers/submitnewnote_req'

const addNote = () => {

    const submitHandle = (e) => {
        SubmitNote(e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)}>
            <Modalinput type='text' id='note' autoFocus/>
            <Button note type='submit'>ADD</Button>
        </ModalWrap>
        </>
    )
}

export default addNote;