import styled from 'styled-components';

export const Section = styled.section`
  height: 600px;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 2em;
    height: max-content;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 6em 2em 0 2em;
    height: max-content;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 5em;
    height: 500px;
  }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-top: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
      margin-top: 2em;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      margin-top: 7em;
    }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  width: 100%;
  margin-bottom: 1em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
    font-size: 1em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 5%;
    font-size: 2em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2.5em;
    margin-bottom: .5em;
  }
`;

export const Span = styled.span`
  margin-left: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: .5em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 1em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 2em;
  }
`;

export const A = styled.a`
  color: hsl(78deg 68% 78%);
  margin-left: 2em;
  display: block;
  transition: all .3s;
  &:hover{
    text-decoration: underline;
    color: gray;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1em;
    margin: .5em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 1em;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 2em;
  }
`;

export const SocialIcons = styled.a`
  display: none;
  transition: 0.3s ease;
  color: hsl(78deg 68% 78%);
  border-radius: 50px;
    padding: 8px;
  &:hover {
      background-color: #212d45;
      transform: scale(1.1);
      cursor: pointer;
    }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline-block;
  }
`;
