import { PageWrapper } from './styles';

interface Props {
  children: React.ReactNode;
  id: string;
}

export const Page = ({ children, id }: Props) => {
  return <PageWrapper id={id}>{children}</PageWrapper>;
};
