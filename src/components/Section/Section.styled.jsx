import styled from '@emotion/styled';

export const SectionWrap = styled.section`
  text-align: start;
  padding: ${props => props.theme.spacing.step}px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: 0px;
  padding-top: 100px;
  @media (max-width: 369px) {
    width: 96vw;
  }
  @media (min-width: 370px) {
    width: 400px;
    padding: ${props => props.theme.spacing.step * 5}px;
    padding-top: 100px;
  }
`;
export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;
