import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import Logo from '../../public/logo.png'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, StyledButton } from './HeaderStyles';
import Image from 'next/image';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <Image src={Logo} alt="logo" />
        </a>
      </Link>
    </Div1>
    <Div2>
        <li>
        <Link href="#contact">
          <StyledButton>Resume</StyledButton>
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
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiOutlineMail size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;