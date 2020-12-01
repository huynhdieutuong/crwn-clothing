import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './styles';

const withSpinner = (WrappedComponent) => ({ loading, ...otherProps }) => {
  return loading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
