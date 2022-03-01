import styled from 'styled-components';

export const Section = styled.section`
  height: 100px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 4em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: 1em;
    height: max-content;
  }
`;

export const P = styled.p`
  font-family: 'Mukta', sans-serif;
  font-weight: 300;
  color: #dedede;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`;
