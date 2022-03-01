import styled from 'styled-components';

export const Section = styled.section`
  min-height: 600px;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1em;
    min-height: 200px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0;
    max-height: max-content;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 0;
    max-height: max-content;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    padding-left: 5em;
    max-height: max-content;
    width: 100%;
  }
`;

export const ContactContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding-top: 2em;
    padding-left: .5em;
    margin-bottom: .5em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-height: max-content;
  }
 
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 3em;
  width: 100%;
  margin-bottom: 1em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
    margin-bottom: 0;
    font-size: 1em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 10%;
    max-height: max-content;
    font-size: 2em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex:
    justify-content: center;
    margin-left: 0;
    max-height: max-content;
    font-size: 1.5em;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: flex:
    justify-content: center;
    font-size: 3em;
  }
`;

export const Span = styled.span`
  margin-left: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: .5em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 2em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 2em;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-left: 1em;
  }
`;

export const A = styled.a`
  color: hsl(78deg 68% 78%);
  margin-left: 2em;
  display: block;
  transition: all .3s;
  &:hover{
    text-decoration: underline;
    color: gray;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 2em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 2em;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-left: 1em;
  }
`;
