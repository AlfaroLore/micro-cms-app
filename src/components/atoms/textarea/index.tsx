import styled, { css } from 'styled-components';

const styles = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.4444444444em;
  height: auto;
  color: white;
  border-radius: 2px;
  &[type='checkbox'],
  &[type='radio'] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;

const Textarea = styled.textarea`
  ${styles}
`;

export default Textarea;
