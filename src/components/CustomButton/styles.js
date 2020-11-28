import styled, { css } from 'styled-components';

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  if (props.inverted) {
    return invertedStyles;
  }

  return null;
};

export const CustomButtonContainer = styled.button`
  padding: 15px 20px;
  min-width: 150px;
  background-color: black;
  color: white;
  font-size: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
  }

  ${getButtonStyles}
`;
