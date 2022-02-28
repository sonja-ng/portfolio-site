import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2em;
  }
`;

export const H1 = styled.h1`
    font-size: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em;
      }
`;

export const FlexContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;

export const Flexbox = styled.div`
  padding-top: 10em;
  display: flex;
  width: 70%;
  height: max-content;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 0;
  }
`;
export const Logobox = styled.div`
  font-size: 5em;
  margin: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4em;
  }
`;