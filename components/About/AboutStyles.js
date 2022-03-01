import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10em 2em 0 2em;
    max-height: max-content;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 6em 2em 0 2em;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 5em;
    padding-right: 5em;
    max-height: max-content;
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

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1em 2em 0 2em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 1em;
  }
`;

export const Span = styled.span`
  color: #c7e483;
  font-weight: 700;
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

export const Paragraph = styled.div`
    font-size: 1.5em;
    line-height: 1.5;
    width: 750px;
    padding: 1em;
    font-weight: 300;
    background-color: #28205c;
    color: #d2d2d2;
    position: relative;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 1em;
        width: 100%;
        color: yellow;
      }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.6em;
        width: 100%;
        color: red;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        color: blue;
        width: 90%;
      }
    @media ${(props) => props.theme.breakpoints.xl} {
        color: white;
      }
`;