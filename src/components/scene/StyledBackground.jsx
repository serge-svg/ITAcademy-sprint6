import styled from "styled-components";

const StyledBackground = styled.div`
  height: 100vh;
  padding-top: 5px;
  background-image: url(${({ img }) => img});
  background-size: 100vw 100vh
  `;

  export default StyledBackground;