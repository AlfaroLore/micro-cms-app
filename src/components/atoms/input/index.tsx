import React, { FC } from 'react';
import styled, { css } from 'styled-components';

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

const index: FC = () => {
  return <StyledInput />;
};

export default index;
