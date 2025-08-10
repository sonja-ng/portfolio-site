import { Section, Div1, Paragraph, Span } from './AboutStyles'

const About = () => {
    return (
        <Section id="about">
            <h2>About</h2>
            <Div1>
                <Paragraph>
                    Hi there! I am a software engineer with experience in <Span>React</Span>, <Span>Redux</Span>, <Span>JavaScript</Span>, <Span>HTML</Span>, <Span>CSS</Span>, <Span>Ruby on Rails</Span>, <Span>MongoDB</Span>, <Span>SQL</Span>, <Span>Express.js</Span>, <Span>Node.js</Span>, <Span>AWS</Span>, and <Span>Heroku</Span>. With my background in art, I 
                        value creativity and especially enjoy building beautiful optimized full-stack applications. When I am not coding, you can always find me trying out 
                        new recipes and restaurants!
                    <br/>
                </Paragraph>
            </Div1>
        </Section>
    )
}

export default About;