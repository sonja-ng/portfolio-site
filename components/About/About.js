import React from 'react'
import Image from 'next/image'
import Portrait from '../../public/portrait.jpg'
import { Section, Div1, ImageDiv, Paragraph, Span } from './AboutStyles'

const About = () => {
    return (
        <Section id="about">
            <h2>About</h2>
            <Div1>
                    <ImageDiv>
                        <Image src={Portrait} layout="fill" alt="portrait" objectFit="contain"/>
                    </ImageDiv>
                    <Paragraph>
                        I am an exhibition manager turned software engineer. With a background in art history, I value creativity and clean syntax when writing code and especially enjoy 
                        building beautiful optimized full-stack applications.
                        <br/>
                        <br/>
                         I have built projects with technologies like <Span>React</Span>, <Span>Redux</Span>, <Span>JavaScript</Span>, <Span>Ruby on Rails</Span>, <Span>MongoDB</Span>, <Span>SQL</Span>, <Span>Express.js</Span>, 
                        <Span>Node.js</Span>, <Span>AWS</Span>, and <Span>Heroku</Span>.
                        <br/>
                        <br/>
                        If I am not coding, you can find me cooking and trying out new restaurants in town.
                    </Paragraph>
            </Div1>
        </Section>
    )
}

export default About;