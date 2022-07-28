import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, ...props }: ButtonProps) => {
  return <ButtonStyle {...props}>{label}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
  font-weight: bold;
  font-size: 13px;
  color: var(--main2);
  border: 1px solid var(--main2);
  border-radius: 10px;
  background-color: transparent;
  padding: 1rem 1.7rem;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--mainOpacity);
  }
`;
