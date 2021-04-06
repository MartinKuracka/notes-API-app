import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const SectionWrap = styled.div `
    width: 100%;
    display: flex;
    justify-content:center;
    align-content: center;
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
    min-width: ${props => props.icons ? '2rem' : '25rem'} ;
    background-color: whitesmoke;
    border-radius: 5px;
    text-align: center;
    animation: ${slideIn} 0.5s ease-in-out ;
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
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
`
export const ModalWrap = styled.form `
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 25rem;
    margin-bottom: ${props => props.delete ? '20px' : null };
`
export const Modalinput = styled.input `
    height: 1.5rem;
    width: 80%;
`
export const Loader = styled.div `
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
