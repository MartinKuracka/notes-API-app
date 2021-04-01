import styled from 'styled-components';
import {SectionWrap} from './styled_components';
import Note from './note'

const Content = styled(SectionWrap) `
    justify-content: flex-start;
    margin: 10px 0px;
    height: 3rem;
    width: 200px;
    border-radius: 1rem;
`
const Notes = () => {
    return(
            <>
            <Content>
                {/* <Note /> */}
            </Content>
            </>
    )
}

export default Notes;