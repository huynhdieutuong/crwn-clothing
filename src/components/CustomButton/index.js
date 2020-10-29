import React from 'react';
import './styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  const classGoogleSignIn = isGoogleSignIn ? 'google-sign-in' : '';
  const classInverted = inverted ? 'inverted' : '';
  return (
    <button
      className={`${classGoogleSignIn} ${classInverted} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
