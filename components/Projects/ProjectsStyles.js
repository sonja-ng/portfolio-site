import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 5em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10em 2em 0 2em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 6em 2em 0 2em;
    max-height: max-content;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 5em;
    max-height: max-content;
  }
`;
export const Div1 = styled.div`
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0em;
  }
`;

export const Project = styled.div`
  margin: 3em 0 3em 0;
  width: max-content;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ProjectTitle = styled.div`
  height: 1.5em;
  width: max-content;
  font-family: 'Fira Sans', sans-serif;
  line-height: 1.5;
  text-align: center;
  font-weight: 600;
  font-style: italic;
  padding: 0 .4em;
  background-color: hsl(78deg 68% 78%);
  color: black;
  position: absolute;
  top: -1.2em;
  left: -2em;
  z-index: 5;
  font-size: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    position: absolute;
      left: 0;
      top: -1em;
      font-size: 1.5em;
      color: yellow;
  }

  @media ${(props) => props.theme.breakpoints.md} {
      position: absolute;
      left: 0;
      top: -1.1em;
      font-size: 2em;
      color: red;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
      color: blue;
    }
  @media ${(props) => props.theme.breakpoints.xl} {
      color: white;
    }
`;

export const CardInfo = styled.div`
  background-color: #28205c;
  width: 640px;
  height: 5em;
  line-height: 1.5;
  padding: 1em;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: max-content;
  }
`;

export const ImageDiv = styled.div`
  border-radius: 1em;
  overflow: hidden;
  height: 20em;
  position: relative;
  border: 5px solid hsl(78deg 68% 78%);
  width: 40em;
  margin-bottom: 1em;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 20em;
    width: 20em;
  }
`;

export const Paragraph = styled.p`
    font-size: 2em;
    line-height: 1.5;
    font-weight: 300;
    color: #a9a9a9;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 1em;
      }
`;

export const UtilityList = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 50px;
    z-index: 6;
    font-weight: 200;
    right: 0;
    top: -1.5em;
    @media ${(props) => props.theme.breakpoints.sm} {
      position: absolute;
      right: 0;
      top: -1.5em;
      width: 45px;
    }
`;

export const ExternalLinks = styled.a`
      color: gray;
      font-weight: 200;
      transition: all .3s;
      &:hover{
        color: hsl(0deg 5% 82%);
      }
`;
