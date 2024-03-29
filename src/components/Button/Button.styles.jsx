import styled, { css } from "styled-components";


const buttonStyles = css`
    background-color: black;
    color: white;
    border:none;

      
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

export const invertedButtonStyle = css`
        background: #fff;
        color: #000;
        border: 1px solid #000;

        &:hover{
          background: black;
          color: #fff;
          border: none;
          font-weight: 900;
        }
`;

const googleSiginStyles = css`
    background: #4285f4;
    color: white;
    
    &:hover{
        background: #357ae8;
        border: none;
    }
`;

const getButtonStyles = props => {
    if(props.googleSiginStyles){
        return googleSiginStyles;
    }

    return props.inverted ? invertedButtonStyle : buttonStyles;
}



export const ButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    ${getButtonStyles}
`;