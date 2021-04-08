import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const SectionWrap = styled.div `
    width: 100%;
    display: flex;
    justify-content:center;
    align-content: center;
`
export const Section = styled(SectionWrap) `
height: 80px;
background-color: rgba(255,255,255,0.2);
`
export const Icons = styled.img `
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    border-radius: 3px;

    &:hover {
        ${'' /* transform: scale(1.05); */}
        background-color: rgba(180, 146, 49, 0.5);
        filter: brightness(120%)
    }
`
export const Content2 = styled(SectionWrap) `
    justify-content: flex-start;
    margin: 30px 0px;
    width: 500px;
    border-radius: 1rem;
    @media (max-width: 550px) {
        justify-content: center
    }
`
export const Button = styled.button `
    font-family: 'Raleway', sans-serif;
    width: 7rem;
    height: ${props => props.note ? '2rem' : '3rem' };
    background: linear-gradient(183deg, rgba(160,124,28,1) 0%, rgba(191,186,147,1) 100%);
    color: white;
    border-radius: 1.5rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    transition: all ease-in-out 0.1s;
    margin-left: ${props => props.note ? '1rem' : null };
    box-shadow: 5px 5px 5px grey;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        transform: translateY(2px);
        box-shadow: 2px 2px 5px grey;
    }
`
export const Image = styled.img `
    position: absolute;
    width: ${props => props.loader ? '150px' : '100vw' };
    min-height: 100vh;
    height: auto;
    z-index: -1;
    right: ${props => props.loader ? null : '0'};
    top: ${props => props.loader ? null : '0'};
`
export const ContentWrap = styled.div `
    width: 75%;

    @media (max-width: 550px) {
        width: 95%;
    }
`
export const Language = styled.div `
display: inline-flex;
align-items: center;
margin-top: auto;
margin-bottom: auto;
`
export const Lang = styled.h3 `
    color: white;
    margin-right:20px;
`
export const DelText = styled.h3 `
    margin-top: 6px;
`
export const LogoImg = styled.img `
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: ${props => props.language ? '10px' : null};
    height: ${props => props.language ? '30px' : '60px' }};
    cursor: pointer;
`
export const Content = styled(ContentWrap) `
display: flex;
justify-content: space-between;
align-content: center;
`
export const NotesWrap = styled(ContentWrap) `
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const List = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
`
const slideIn = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`
export const NoteContainer = styled.div `
    display: inline-flex;
    justify-content: ${props => props.icons ? 'flex-end' : 'space-between'};
    margin: 5px 0px;
    padding: ${props => props.icons ? null :
         props.modal ? '0px' : '1rem'};
    width: ${props => props.icons ? '2rem' : '25rem'} ;
    background-color: whitesmoke;
    border-radius: 5px;
    text-align: center;
    animation: ${slideIn} 0.7s ease-in-out;
    transition: all ease-in-out 0.2s;

    &:hover {
        transform: ${props => props.icons ? null : 'scale(1.06)'};
    }

    @media (max-width: 550px) {
        width: ${props => props.icons ? '2rem' : '85vw'};
    }
`
export const Item = styled.li `
        list-style-type: none;
        text-align: center;
`
export const OverlayWrapper = styled.div `
    position:absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0);
    z-index: 100;
`
export const ModalWrap = styled.form `
    display: inline-flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 4px;
    margin-bottom: auto;
    width: 25rem;
`
export const Modalinput = styled.input `
    height: 1.5rem;
    width: 80%;
    margin-bottom: auto;
    margin-top: auto;
`
export const LoaderDiv = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4)
`
