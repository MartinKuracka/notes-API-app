import Wedges from '../img/loader.svg';
import {LoaderDiv, Image} from '../components/styled_components'

const Loader = () => {
    return(
        <LoaderDiv>
            <Image src={Wedges} loader/>
        </LoaderDiv>
    )
}

export default Loader