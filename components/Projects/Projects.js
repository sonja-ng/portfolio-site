import React from 'react'
import { Section, Div1, Project, ImageDiv, ProjectTitle, UtilityList, CardInfo, ExternalLinks, H1, Paragraph } from './ProjectsStyles'
import Image from 'next/image'
import { projects } from '../../constants/constants'
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const Projects = () => {
    return (
        <Section id="projects">
            <h2>Projects</h2>
            <Div1>
            {projects.map((p, i) => {
                return (
                     <Project key={i}>
                         <ProjectTitle>{p.title}</ProjectTitle>
                        <UtilityList>
                            <ExternalLinks href={p.visit}><FaExternalLinkAlt size="1.2em"/></ExternalLinks>
                            <ExternalLinks href={p.source}><FaGithubSquare size="1.3em"/></ExternalLinks>
                        </UtilityList>
                         <ImageDiv>
                            <Image src={p.image} layout="fill" objectFit="cover" />
                        </ImageDiv>
                        <CardInfo>{p.description}</CardInfo>
                    </Project>
                        );
                    })}   
            </Div1>
        </Section>
    )
}

export default Projects;