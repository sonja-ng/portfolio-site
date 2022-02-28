import styled from 'styled-components';

export const Section = styled.section`
  height: 100px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`;
