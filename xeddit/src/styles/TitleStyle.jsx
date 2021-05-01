
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100vw;
  background-color: ${({ theme }) => theme.accent};
  display: flex;
  padding: 0 5%;
  align-items: center;
  justify-content: space-between;
  grid-area: title;
  & h1 {
    color: ${({ theme }) => theme.title};
  }`