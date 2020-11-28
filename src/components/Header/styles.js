import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
`;

export const LogoContainer = styled(Link)``;

export const OptionsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  margin-left: 20px;
`;
