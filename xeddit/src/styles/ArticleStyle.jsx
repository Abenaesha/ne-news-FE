import styled from "styled-components";

export const StyledArticle = styled.article`
  text-align: justify;
  background-color: rgba(255, 250, 250, 0.2);
  backdrop-filter: blur(2px);
  box-shadow: 1px 3px 6px rgba(173, 169, 169, 0.6);
  border: solid 1px rgba(255, 250, 250, 0.4);
  border-radius: 4px;
  padding: 5%;
  margin: 10% 0;
  color: ${({ theme }) => theme.altTextColor};
  & ul {
    list-style: none;
  }
`;