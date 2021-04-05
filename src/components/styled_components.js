import styled from 'styled-components';

export const SectionWrap = styled.div `
    width: 100%;
    display: flex;
    justify-content:center;
    align-content: center;
`
export const Button = styled.button `
    font-family: 'Raleway', sans-serif;
    width: 7rem;
    height: 3rem;
    background: linear-gradient(183deg, rgba(160,124,28,1) 0%, rgba(191,186,147,1) 100%);;
    color: white;
    border-radius: 1.5rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    transition: all ease-in-out 0.1s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        transform: translateY(2px)
    }
`
export const Image = styled.img `
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    height: auto;
    z-index: -1;
    right: 0;
    top: 0;
`
export const ContentWrap = styled.div `
    width: 75%;
`
export const List = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
`
export const NoteContainer = styled.div `
    display: inline-flex;
    justify-content: ${props => props.icons ? 'flex-end' : 'space-between'};
    margin: 5px 0px;
    padding: ${props => props.icons ? null : '1rem'};
    min-width: ${props => props.icons ? '2rem' : '25rem'} ;
    background-color: whitesmoke;
    border-radius: 5px;
    text-align: center;
`
export const Item = styled.li `
        list-style-type: none;
        text-align: center;
`