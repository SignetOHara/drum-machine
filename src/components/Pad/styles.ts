import styled from 'styled-components';

export const StyledPad = styled.button`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.black};
  padding: 5rem;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow};
`;
