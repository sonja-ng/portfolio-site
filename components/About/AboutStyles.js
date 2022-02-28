import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10em 2em 0 2em;
    max-height: 100vh;
  }
`;
export const Div1 = styled.div`
  padding: 2em 20em 2em 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0em;
  }
`;

export const ImageDiv = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 15em;
  position: relative;
  border: 5px solid hsl(78deg 68% 78%);
  width: 15em;
  margin-bottom: 3em;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 10em;
    width: 10em;
    margin-top: 2em;
  }
`;

export const H1 = styled.h1`
    font-size: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em;
      }
`;

export const Paragraph = styled.p`
    font-size: 2em;
    line-height: 1.5;
    font-weight: 300;
    color: #a9a9a9;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 1em;
      }
`;
