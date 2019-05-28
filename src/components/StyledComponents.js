
import styled from 'styled-components';

/* Elements used in ModalVideo    */

export const CloseButton = styled.button`
    cursor: pointer;
    font-size: 1.5em;
    border: 1em solid white;
    border-radius: 20em;
`

export const ModelMain = styled.section`
    position:fixed;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`



export const ViewButton = styled.button`
    font-size: 0.9em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
`


/* Elements used in VideoDetails    */
export const VideoDesc = styled.p`
    padding: 0.5em;
    font-size: 1.2em;
`

export const VideoTitle = styled.h2`
    padding: 0.5em;
    
`
export const PublishTitle = styled.p`
    padding: 0.5em 1em;
    
`

export const Image = styled.img`
    padding: 0.5em 1em;
    width: 45%;
    display: inline-block;
    height: 25%;
`
export const VideoDetailPane = styled.div`
    padding: 0.5em 1em;
    display: inline-block;
    width: 47%;
    box-sizing: border-box;
    vertical-align: top;
    margin: 0.5em 1.5em;
`

export const VideoPane = styled.div`
    padding: 0.5em 1.5em; 
    margin: 0.5em 1.5em;
    background-color: lightorange;
    border: solid 2px lightgrey;
`
/* Elements used in App.js    */

export const Heading = styled.h1`
    text-align: center;
`;

export const PageNumbers = styled.span`
    font-size: 1.4em;
    padding: 0.1em 1em;
`

export const PrevNextButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    padding: 0.5em 1em;
`

export const PageNavigation = styled.div`
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    left: 62em;
    vertical-align: top;
    padding-top; 1em;
    margin-top: 1em;
`
export const TotalResults = styled.span`
    font-size: 1.2em;
    margin: 1em;
    padding: 0.5em 1.5em;
    display: inline-block;
    position: relative;
`

export const SearchButton = styled.button`
    font-size: 0.9em;
    margin: 1em;
    margin-left: 0em;
    padding: 0.5em 1.5em;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
`

export const SearchBox = styled.input`
    width: 30%;
    padding: 0.5em 1.5em;
    font-size: 0.85em;
`

export const SearchPane = styled.div`
    border-bottom: solid 2px lightgrey;
    height: 10%;
    padding: 2%;
    text-align: center;
`

export const PaneBoundary = styled.div`
    width: 98%;
    margin: 1.5em;
    border: solid 2px lightgrey;
`

export const PageBoundary = styled.div`
    text-align: center;
`




