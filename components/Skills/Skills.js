import { Section, Flexbox, Logobox, FlexContainer, P } from './SkillsStyles'
import { SiMongodb, SiReact, SiRedux, SiJavascript, SiHtml5, SiCss3, SiRuby, SiRubyonrails, 
    SiPostgresql, SiExpress, SiGithub, SiHeroku, SiGit, SiAmazonaws, 
    SiNodedotjs, SiAdobephotoshop, SiAdobeillustrator, SiWebpack, SiSass } from "react-icons/si";

const Skills = () => {
    return (
        <Section id="skills">
            <h2>Technologies</h2>
            <FlexContainer>
                <Flexbox>
                    <Logobox>
                        <SiJavascript />
                        <P>JavaScript</P>
                    </Logobox>
                    <Logobox>
                        <SiReact />
                        <P>React</P>
                    </Logobox>
                    <Logobox>
                        <SiRedux />
                        <P>Redux</P>
                    </Logobox>
                    <Logobox>
                        <SiRuby />
                        <P>Ruby</P>
                    </Logobox>
                    <Logobox>
                        <SiRubyonrails />
                        <P>Rails</P>
                    </Logobox>
                    <Logobox>
                        <SiHtml5 />
                        <P>HTML5</P>
                    </Logobox>
                    <Logobox>
                        <SiCss3 />
                        <P>CSS3</P>
                    </Logobox>
                    <Logobox>
                        <SiPostgresql />
                        <P>PostgreSQL</P>
                    </Logobox>
                    <Logobox>
                        <SiMongodb />
                        <P>MongoDB</P>
                    </Logobox>
                    <Logobox>
                        <SiExpress />
                        <P>Express.js</P>
                    </Logobox>
                    <Logobox>
                        <SiNodedotjs />
                        <P>Node.js</P>
                    </Logobox>
                    <Logobox>
                        <SiGit />
                        <P>Git</P>
                    </Logobox>
                    <Logobox>
                        <SiGithub />
                        <P>Github</P>
                    </Logobox>
                    <Logobox>
                        <SiHeroku />
                        <P>Heroku</P>
                    </Logobox>
                    <Logobox>
                        <SiAmazonaws />
                        <P>AWS</P>
                    </Logobox>
                    <Logobox>
                        <SiWebpack />
                        <P>Webpack</P>
                    </Logobox>
                    <Logobox>
                        <SiSass />
                        <P>SASS</P>
                    </Logobox>
                    <Logobox>
                        <SiAdobephotoshop />
                        <P>Photoshop</P>
                    </Logobox>
                    <Logobox>
                        <SiAdobeillustrator />
                        <P>Illustrator</P>
                    </Logobox>
                </Flexbox>
            </FlexContainer>
        </Section>
    )
}

export default Skills;