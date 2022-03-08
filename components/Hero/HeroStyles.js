import styled from 'styled-components';

export const Container = styled.section`
  min-height: calc(100vh - 83px);
  max-width: 100vw;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10em 2em 0 2em; 
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
  margin: 15em auto;
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
    font-size: 3em;
    color: #d2d2d2;
    font-family: 'Mukta', sans-serif;
    margin-top: 1em;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em;
      }
`;