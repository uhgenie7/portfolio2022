import type { ReactNode } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { isDarkAtom } from 'states';
import { useRecoilValue } from 'recoil';
import { darkTheme, lightTheme } from '@src/styles/theme';

type IProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: IProps) => {
  const isDarkMode = useRecoilValue(isDarkAtom);

  return (
    <>
      <StyledProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</StyledProvider>
    </>
  );
};

export default ThemeProvider;
