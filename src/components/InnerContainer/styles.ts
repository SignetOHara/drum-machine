import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 41rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
`;
