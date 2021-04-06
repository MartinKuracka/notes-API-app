import { ModalWrap, Modalinput, Button } from "./styled_components";
import SubmitNote from '../API_controllers/submitnewnote'

const addNote = () => {

    const submitHandle = (e) => {
        // e.preventDefault();
        // console.log(e.target[0].value);
        SubmitNote(e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)}>
            <Modalinput type='text' id='note'/>
            <Button note type='submit'>ADD</Button>
        </ModalWrap>
        </>
    )
    

}




export default addNote;