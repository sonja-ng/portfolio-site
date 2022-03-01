import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10em 2em 0 2em;
    min-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 0;
    max-height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    padding-left: 5em;
    max-height: max-content;
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
  width: 60%;
  height: max-content;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 5em 0;
    width: 100%;
  }
`;
export const Logobox = styled.div`
  font-size: 5em;
  margin: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3em;
  }
`;