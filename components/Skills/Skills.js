import React from 'react'
import { Section, H1, Flexbox, Logobox, FlexContainer } from './SkillsStyles'
import { SiMongodb, SiReact, SiRedux, SiJavascript, SiHtml5, SiCss3, SiRuby, SiRubyonrails, 
    SiPostgresql, SiExpress, SiGithub, SiHeroku, SiGit, SiAmazonaws, 
    SiNodedotjs, SiAdobephotoshop, SiAdobeillustrator, SiWebpack, SiSass } from "react-icons/si";

const Skills = () => {
    return (
        <Section id="skills">
            <H1>Technologies</H1>
            <FlexContainer>
                <Flexbox>
                    <Logobox>
                        <SiJavascript />
                    </Logobox>
                    <Logobox>
                        <SiReact />
                    </Logobox>
                    <Logobox>
                        <SiRedux />
                    </Logobox>
                    <Logobox>
                        <SiRuby />
                    </Logobox>
                    <Logobox>
                        <SiRubyonrails />
                    </Logobox>
                    <Logobox>
                        <SiHtml5 />
                    </Logobox>
                    <Logobox>
                        <SiCss3 />
                    </Logobox>
                    <Logobox>
                        <SiPostgresql />
                    </Logobox>
                    <Logobox>
                        <SiMongodb />
                    </Logobox>
                    <Logobox>
                        <SiExpress />
                    </Logobox>
                    <Logobox>
                        <SiNodedotjs />
                    </Logobox>
                    <Logobox>
                        <SiGit />
                    </Logobox>
                    <Logobox>
                        <SiGithub />
                    </Logobox>
                    <Logobox>
                        <SiHeroku />
                    </Logobox>
                    <Logobox>
                        <SiAmazonaws />
                    </Logobox>
                    <Logobox>
                        <SiWebpack />
                    </Logobox>
                    <Logobox>
                        <SiSass />
                    </Logobox>
                    <Logobox>
                        <SiAdobephotoshop />
                    </Logobox>
                    <Logobox>
                        <SiAdobeillustrator />
                    </Logobox>
                </Flexbox>
            </FlexContainer>
        </Section>
    )
}

export default Skills;