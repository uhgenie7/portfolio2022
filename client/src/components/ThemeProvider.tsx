import type { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { isDarkAtom } from 'states';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { darkTheme, lightTheme } from '@src/styles/theme';

type IProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: IProps) => {
  const isDarkMode = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDark = () => setDarkAtom((prev) => !prev);

  return (
    <>
      <StyledProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ToggleWrapper onClick={toggleDark}>{isDarkMode ? '🌚' : '🌝'}</ToggleWrapper>
        {children}
      </StyledProvider>
    </>
  );
};

export default ThemeProvider;

const ToggleWrapper = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
`;
