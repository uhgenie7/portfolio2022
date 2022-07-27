import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { isDarkAtom } from 'states';
import { useRecoilValue, useRecoilState } from 'recoil';
import { darkTheme, lightTheme } from '@src/styles/theme';

type IProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: IProps) => {
  const [isInitial, setIsInitial] = useState(true);
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return (
    <>
      <StyledProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</StyledProvider>
    </>
  );
};

export default ThemeProvider;
