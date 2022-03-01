import styled from 'styled-components';

export const Container = styled.nav`
  display: grid;
  position: sticky;
  top: 0;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  padding: 1rem;
  padding-top: 2rem;
  background-color: #18133c;
  z-index: 10;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 1 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 3 / 1 / 3;
  }
`;

export const LogoContainer = styled.div`
  height: 50px;
  width: 50px;
  line-height: 50px;
  margin-left: 8px;
  text-align: center;
  border: 1px solid hsl(78deg 68% 78%); 
  color: hsl(78deg 68% 78%);
  font-family: 'Abril Fatface', cursive;
  font-size: 2em;
  transition: all .3s;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 45px;
    width: 45px;
    line-height: 45px;
    margin-left: .7em; 
  }
  @media ${(props) => props.theme.breakpoints.md} {
    color: red;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    color: blue;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    color: white;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 2 / 6;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 6 / 1 / 6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration-thickness: 1em;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const StyledButton = styled.button`
  font-size: 1.7rem;
  line-height: 32px;
  border: 2px solid hsl(78deg 68% 78%);
  background-color: #2f2768;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  border-radius: 4px;
  padding: .5em 1em .5em 1em;
  &:hover {
    color: #fff;
    border: 2px solid #868686;
    background-color: #23226a;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: hsl(78deg 68% 78%);
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.1);
    cursor: pointer;
  }
`