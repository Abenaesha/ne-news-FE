import React from 'react';
import { StyledHeader } from "../styles/TitleStyle";

const Title = ({handleToggle}) => {
    return (
        <StyledHeader className="title">
        <h1>xeddit</h1>
        <i className="fas fa-bars" onClick={handleToggle}></i>
      </StyledHeader>
    )
}

export default Title;