import styled from "styled-components";

const StyledParagraph  = styled.p
`
    border: 2px solid black;
    border-radius: 8px;
    width: 100%;
    text-align: center;
`;

export const Scene = (props) => {
    return (<StyledParagraph >{props.sentence}</StyledParagraph >);
};
