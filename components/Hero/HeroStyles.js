import styled from 'styled-components';

export const Container = styled.section`
  padding: 15em 10% 15em 15%;
  min-height: calc(100vh - 83px);
  max-width: 100vw;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10em 2em 0 2em; 
    max-width: 100vw;
    max-height: calc(100vh - 155px);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 15em 0 0 1.8em;   
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const H2 = styled.h2`
    font-size: 3em;
    color: #d2d2d2;
    margin-left: 3em;
    font-family: 'Mukta', sans-serif;
    margin-top: 1em;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em;
        margin-left: 0;
      }
    @media ${(props) => props.theme.breakpoints.md} {
        margin-left: 1em;
        font-size: 2.7em;
      }
    @media ${(props) => props.theme.breakpoints.lg} {
        margin-left: 2em;
      }
`;