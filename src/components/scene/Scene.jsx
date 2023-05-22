import styled from "styled-components";

const StyledParagraph = styled.p
`
    border: 2px solid black;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    background-color: ${( { active }) => active ? "blue" : "red"}; 
`;

export const Scene = (props) => {
    return (<StyledParagraph active={props.id === props.index ? true : false}>{props.sentence}</StyledParagraph>);
};
