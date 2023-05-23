import styled from 'styled-components';
import { Button } from '../Button';

const ButtonsContainer = styled.div
`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Buttons = (props) => {  
    return (
      <div>
        <ButtonsContainer>
          <Button onClick={props.previus}>
            Previous
          </Button>
          <Button onClick={props.next}>
            Next
          </Button>
        </ButtonsContainer>
      </div>
    );
  };
  
  