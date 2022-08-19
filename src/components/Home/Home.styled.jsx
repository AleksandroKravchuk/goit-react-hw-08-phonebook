import styled from '@emotion/styled';

export const SectionWrap = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing.step * 5}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: 0px;
  padding-top: 200px;
`;
export const Heading = styled.h1`
  font-size: 80px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: 100px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: 150px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: 150px;
  }
`;
