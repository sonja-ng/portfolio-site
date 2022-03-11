import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  min-height: calc(100vh - 83px);
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 5em 2em 0 2em; 
    max-width: 100vw;
    max-height: calc(100vh - 155px);
    line-height: 1.3;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 10em 0 0 1.8em;   
  }
`;
export const Div1 = styled.div`
  width: max-content;
  display: flex;
  padding-top: 15em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    text-align: center;
    margin-top: 5em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 5em;
  }
`;

export const H2 = styled.h2`
    letter-spacing: .2em;
    font-size: 3em;
    color: #d2d2d2;
    font-family: 'Mukta', sans-serif;
    margin-top: 1em;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em;
      }
`;

export const WordContainer = styled.div`
      margin-top: 2em;
      overflow: hidden;
      height: 4em;
      text-align: center;
`;

export const spinWords = keyframes`
  0% {
    transform: translateY(100%);
  }

  25% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(-100%);
  }
  
  75% {
    transform: translateY(-200%);
  }

  100% {
    transform: translateY(-300%);
  }
`

export const Span = styled.span`
      letter-spacing: .2em;
      display: block;
      height: 100%;
      font-size: 2.5em;
      animation: ${spinWords} 9s infinite;
      @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em; 
      }
`;
