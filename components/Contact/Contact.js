import React from 'react'
import { Section, A, ContactContainer, ContactRow, Span } from './ContactStyles'
import { FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
    return (
        <Section id="contact">
            <h2>
                Say hello
            </h2>
            <ContactContainer>
                    <ContactRow><FiMapPin/><Span>New York City</Span></ContactRow>
                    <ContactRow><FiMail/><Span><A href="mailto:sonja.ng1gmail.com">sonja.ng1@gmail.com</A></Span></ContactRow>
            </ContactContainer>
        </Section>
    )
}

export default Contact;