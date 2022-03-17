import styled from 'styled-components';

export const Section = styled.section`
  height: 400px;
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
    align-items: center; 
    margin: 5em auto 0 auto;
    width: 600px;
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
  font-size: 2.5em;
  width: 60%;
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

export const LeftDiv = styled.div`
  display: flex;
`;

export const RightDiv = styled.div`
  display: flex;
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
  color: #a5e5ce;
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
  color: #a5e5ce;
  border-radius: 50px;
    padding: 5px;
  &:hover {
      background-color: #212d45;
      transform: scale(1.1);
      cursor: pointer;
    }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline-block;
  }
`;
