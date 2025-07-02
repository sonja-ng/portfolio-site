import React from 'react'
import { Container, Div1, H2, WordContainer, Span } from './HeroStyles';

const Hero = () => {
    return (
        <Container>
            <Div1>
                <h1>
                    SONJA NG
                </h1>
                <H2>
                    SOFTWARE ENGINEER </H2>
                <WordContainer>
                <Span>
                    Ramen Lover
                </Span>
                <Span>
                    Bass Player
                </Span>
                <Span>
                    Writer
                </Span>
                </WordContainer>     
            </Div1>
        </Container>
    )
}

export default Hero;