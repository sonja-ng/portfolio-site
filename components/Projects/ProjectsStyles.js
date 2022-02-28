import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 10em;
  padding-top: 5em;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2em;
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
  }
`;

export const ProjectTitle = styled.div`
  height: 1.5em;
  width: max-content;
  line-height: 1.5;
  text-align: center;
  font-weight: 800;
  padding: 0 .4em;
  background-color: hsl(78deg 68% 78%);
  color: black;
  position: absolute;
  top: -1.2em;
  left: -.5em;
  z-index: 5;
  font-size: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const CardInfo = styled.div`
  background-color: #28205c;
  width: 640px;
  height: 5em;
  line-height: 1.5;
  padding: 1em;
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

export const H1 = styled.h1`
    font-size: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2em;
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
`;

export const ExternalLinks = styled.a`
      color: hsl(78deg 68% 78%);
      font-weight: 200;
      transition: all .3s;
      &:hover{
        color: hsl(0deg 5% 82%);
      }
`;
