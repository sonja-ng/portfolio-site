import styled from 'styled-components';

export const Section = styled.section`
  min-height: 600px;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2em;
    min-height: 200px;
  }
`;

export const ContactContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding-top: 2em;
  }
 
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 3em;
  width: 100%;
  margin-left: 10em;
  margin-bottom: 1em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
    font-size: 1em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0;
    max-height: max-content;
  }
`;

export const Span = styled.span`
  margin-left: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: .5em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: .2em;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: .2em;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-left: 0;
    max-height: max-content;
  }
`;

export const A = styled.a`
  color: hsl(78deg 68% 78%);
  transition: all .3s;
  &:hover{
    text-decoration: underline;
    color: gray;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
