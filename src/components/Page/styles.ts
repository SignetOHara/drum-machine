import styled from 'styled-components';

export const PageWrapper = styled.main`
  background-color: ${(props) => props.theme.colors.main};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
