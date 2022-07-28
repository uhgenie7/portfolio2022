import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  halfHL: css`
    color: ${({ theme }) => theme.textColor};
    position: relative;
    display: inline-block;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, ${({ theme }) => theme.highlight} 50%);
  `,
};

export default mixins;
