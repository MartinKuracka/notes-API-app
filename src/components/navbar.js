import styled from 'styled-components';
import {SectionWrap, ContentWrap} from './styled_components';
import Logo from '../img/logo.png';
import ToggleBtn from './toggleswitch';

const Section = styled(SectionWrap) `
    height: 80px;
    background-color: rgba(255,255,255,0.2);
`
const Content = styled(ContentWrap) `
    display: flex;
    justify-content: space-between;
    align-content: center;
`
const LogoImg = styled.img `
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    height: 60px;
`
const Language = styled.div `
    display: inline-flex;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
`
const Lang = styled.h3 `
    color: white;
    margin-left:20px;
`
const Navbar = () => {
    return(
        <Section>
            <Content>
                <LogoImg src={Logo}/>
                <Language>
                    <ToggleBtn/>
                    <Lang>EN</Lang>
                </Language>
            </Content>
        </Section>
    )
}

export default Navbar;