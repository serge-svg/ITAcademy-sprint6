import styled from 'styled-components';

const ButtonsContainer = styled.div
`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button
`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
`;

export const Buttons = () => {  
    return (
      <div>
        <ButtonsContainer>
          <Button onClick={handleButtonPrevius}>
            Previous
          </Button>
          <Button onClick={handleButtonNext}>
            Next
          </Button>
        </ButtonsContainer>
      </div>
    );
  };
  