import React from 'react'
import Image from 'next/image'
import Portrait from '../../public/portrait.jpg'
import { Section, Div1, ImageDiv, H1, Paragraph } from './AboutStyles'

const About = () => {
    return (
        <Section id="about">
            <h2>About</h2>
            <Div1>
                    <ImageDiv>
                        <Image src={Portrait} layout="fill" objectFit="contain"/>
                    </ImageDiv>
                    <Paragraph>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                    </Paragraph>
            </Div1>
        </Section>
    )
}

export default About;