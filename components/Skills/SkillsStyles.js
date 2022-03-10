import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10em 2em 0 2em;
    min-height: 500px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 6em 2em 0 2em;
    height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 5em;
    padding-right: 2em;
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

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    padding-top: 5em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 80%;
  }
`;
export const Logobox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5em;
  margin: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3em;
    margin: 5px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
      margin: 10px;
      font-size: 4em;
  }
`;

export const P = styled.p`
  font-size: .2em;
  margin-top: 7px;
`;