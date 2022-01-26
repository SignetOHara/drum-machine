import styled from 'styled-components';

export const StyledDisplay = styled.div`
  display: flex;
  width: 41rem;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 2rem;
  color: black;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
