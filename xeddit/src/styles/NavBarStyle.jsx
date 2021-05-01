import styled from "styled-components";


export const StyledNav = styled.nav`
  position: fixed;
  height: calc(100% - 3rem);
  z-index: 10;
  top: 3rem;
  left: ${(props) => (props.show ? "20%" : "100%")};
  width: 80%;
  background-color: ${({ theme }) => theme.accent};
  display: flex;
  padding: 0 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: left 400ms;
  a {
    color: ${({ theme }) => theme.color};
  }
  a:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
  @media only screen and (min-width: 768px) {
    position: sticky;
    top: calc(3rem + 10%);
    margin-left: 5%;
    left: 0;
    width: 80%;
    height: 70vh;
    grid-area: navbar;
  }`