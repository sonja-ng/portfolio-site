import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, LogoContainer, SocialIcons, StyledButton } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <LogoContainer>
            S
          </LogoContainer>
        </a>
      </Link>
    </Div1>
    <Div2>
        <li>
        <Link href="#contact">
          <StyledButton onClick={()=> window.open("../../Sonja_Ng_Resume_2023.pdf", "_blank")}>Resume</StyledButton>
        </Link>
      </li> 
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>   
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
        </li>          
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sonja-ng" target="blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sonjang/" target="blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:sonja.ng1@gmail.com">
          <AiOutlineMail size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;