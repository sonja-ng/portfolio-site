import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  padding: 10rem; 
  min-height: 100vh;
  max-width: 100vw;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2em;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 1 / 2;  
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