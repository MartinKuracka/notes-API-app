// loader SVG
import Wedges from '../img/loader.svg';
// styled components
import {LoaderDiv, Image} from '../components/styled_components'

const Loader = () => {
    return(
        <LoaderDiv>
            <Image src={Wedges} loader/>
        </LoaderDiv>
    )
}

export default Loader