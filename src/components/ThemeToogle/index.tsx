import styled from 'styled-components';
import { isDarkAtom } from 'states';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Light from '@src/assets/icons/light.svg';
import Dark from '@src/assets/icons/dark.svg';

const ThemeToogle = () => {
  const isDarkMode = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDark = () => setDarkAtom((prev) => !prev);

  return (
    <ToggleWrapper isDarkMode={isDarkMode} onClick={toggleDark}>
      <Light fill="#ffc747" />
      <Dark fill="#ffc747" />
    </ToggleWrapper>
  );
};

export default ThemeToogle;

const ToggleWrapper = styled.button<{ isDarkMode: boolean }>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ isDarkMode }) => (isDarkMode ? 'translateY(100px)' : 'translateY(0)')};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ isDarkMode }) => (isDarkMode ? 'translateY(0)' : 'translateY(-100px)')};
    }
  }
`;
