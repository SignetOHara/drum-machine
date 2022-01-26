import { useEffect, useState } from 'react';
import { InnerContainer } from '../components/InnerContainer/InnerContainer';
import { drumData } from '../data/drumData';
import { Pad } from '../components/Pad/Pad';
import { Display } from '../components/Display/Display';

export const DrumMachine = () => {
  const [keyPress, setKeyPress] = useState('');
  const [keyID, setKeyID] = useState('');

  const playSound = (audio: HTMLAudioElement) => {
    audio.currentTime = 0;
    audio.play();
  };

  const clickHandler = (keyTrigger: string, id: string) => {
    const audio = document.getElementById(keyTrigger) as HTMLAudioElement;
    setKeyID(id);
    playSound(audio);
  };

  useEffect(() => {
    const keyDownHandler = (ev: KeyboardEvent) => {
      const pressedKey = drumData.filter(
        (drum) => drum.keyTrigger === ev.key.toUpperCase()
      );
      setKeyID(pressedKey[0].id);
      setKeyPress(ev.key.toUpperCase());
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (keyPress) {
      const audio = document.getElementById(keyPress) as HTMLAudioElement;
      playSound(audio);
      setKeyPress('');
    }
  }, [keyPress]);

  return (
    <>
      <Display id="display">{keyID}</Display>
      <InnerContainer>
        {drumData.map((drum) => (
          <Pad
            key={drum.id}
            id={drum.id}
            audio={drum.url}
            clickHandler={clickHandler}
          >
            {drum.keyTrigger}
          </Pad>
        ))}
      </InnerContainer>
    </>
  );
};
