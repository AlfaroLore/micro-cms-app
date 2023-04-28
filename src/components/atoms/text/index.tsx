import styled from 'styled-components';

export const StyledHeading = styled.p.attrs(() => ({
  className: 'font-helvetica'
}))``;

export const H1 = styled(StyledHeading).attrs(() => ({
  className: 'text-5xl font-light uppercase'
}))``;

export const H2 = styled(StyledHeading).attrs(() => ({
  className: 'text-4xl font-bold'
}))``;

export const H3 = styled(StyledHeading).attrs(() => ({
  className: 'text-2xl font-bold'
}))``;

export const H4 = styled(StyledHeading).attrs(() => ({
  className: 'text-lg font-bold'
}))``;

export const Paragraph = styled.p.attrs(() => ({
  className: 'text-base font-normal'
}))``;

export const Small = styled(StyledHeading).attrs(() => ({
  className: 'text-sm font-bold '
}))``;
