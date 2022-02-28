import styled from 'styled-components';

export const Container = styled.section`
  padding: 15em 20em;
  min-height: calc(100vh - 83px);
  max-width: 100vw;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2em;
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const H1 = styled.h1`
    font-size: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 3em;
      }
`;

export const H2 = styled.h2`
    font-size: 3em;
    color: #a9a9a9;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em;
      }
`;