import { StyledPad } from './styles';

interface Props {
  id: string;
  children: string;
  audio: string;
  clickHandler: (children: string, id: string) => void;
}

export const Pad = ({ id, children, audio, clickHandler }: Props) => {
  return (
    <StyledPad
      id={id}
      className="drum-pad"
      onClick={() => clickHandler(children, id)}
    >
      {children}
      <audio className="clip" src={audio} id={children}></audio>
    </StyledPad>
  );
};
