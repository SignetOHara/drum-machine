import { StyledContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

export const InnerContainer = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};
