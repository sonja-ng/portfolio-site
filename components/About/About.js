import React from 'react'
import Image from 'next/image'
import Portrait from '../../public/portrait.jpg'
import { Section, Div1, Div2 } from './AboutStyles'

const About = () => {
    return (
        <Section id="about">
            <Div1>
                <Image src={Portrait} />
            </Div1>
            <Div2>
                <h1>About</h1>
            </Div2>
        </Section>
    )
}

export default About;