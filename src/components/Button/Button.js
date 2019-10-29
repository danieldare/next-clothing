import React from 'react';
import "./Button.scss";
import { ButtonContainer }  from "./Button.styles";

const Button = ({children, ...otherProps}) => {
    return (
        <ButtonContainer {...otherProps}>
            { children }
        </ButtonContainer>
    )
}

export default Button;
