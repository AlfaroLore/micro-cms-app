import React, { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import cx from 'classnames';

const styles = css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  border: 0.0625em solid ${cx('transparent', 'currentcolor', 'transparent')};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${cx('disabled', 'default', 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${cx('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: white;
  color: black;
  &:hover,
  &:focus,
  &:focus {
    outline: none;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  ${styles}
`;

const StyledButton = styled.button`
  ${styles}
`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  to?: string;
  type?: 'button' | 'submit' | 'reset';
}

const index: FC<ButtonProps> = ({ type = 'button', ...props }) => {
  const { to } = props;
  if (to) {
    return <StyledLink {...props} />;
  }
  return <StyledButton {...props} type={type} />;
};

export default index;
