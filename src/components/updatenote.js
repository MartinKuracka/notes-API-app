import { ModalWrap, Modalinput, Button } from "./styled_components";
import UpdateNoteContent from '../API_controllers/updatenotecontent_req';

const UpdateNote = ({id}) => {

    const submitHandle = (e) => {
        UpdateNoteContent(id, e.target[0].value);
    }

    return(
        <>
        <ModalWrap onSubmit={(e) => submitHandle(e)}>
            <Modalinput type='text' id='note' autoFocus/>
            <Button note type='submit'>UPDATE</Button>
        </ModalWrap>
        </>
    )
}

export default UpdateNote;