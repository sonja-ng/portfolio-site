import React from 'react'
import { Section, A, ContactContainer, ContactRow, Span, SocialIcons, LeftDiv, RightDiv } from './ContactStyles'
import { FiMapPin, FiMail } from "react-icons/fi";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    return (
        <Section id="contact">
            <h2>
                Say hello
            </h2>
            <ContactContainer>
                    <ContactRow><LeftDiv><FiMapPin/></LeftDiv><RightDiv><Span>New York City</Span></RightDiv></ContactRow>
                    <ContactRow><LeftDiv><FiMail/></LeftDiv><RightDiv><A href="mailto:sonja.ng1@gmail.com">sonja.ng1@gmail.com</A></RightDiv></ContactRow>
                    <ContactRow>
                        <SocialIcons href="https://github.com/sonja-ng" target="blank">
                        <AiFillGithub size="3rem" />
                        </SocialIcons>
                        <SocialIcons href="https://www.linkedin.com/in/sonja-ng-a22aa513/" target="blank">
                        <AiFillLinkedin size="3rem" />
                        </SocialIcons>
                    </ContactRow>
            </ContactContainer>
        </Section>
    )
}

export default Contact;