import React, { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

const styles = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 2px;
`;

const StyledInput = styled.input`
  ${styles}
`;

const index: FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default index;
