import React from 'react'
import { Section, Div1, Project, ImageDiv, ProjectTitle, UtilityList, CardInfo, ExternalLinks } from './ProjectsStyles'
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
                            <ExternalLinks href={p.source} target="blank"><FaExternalLinkAlt size="1.2em"/></ExternalLinks>
                            <ExternalLinks href={p.visit} target="blank"><FaGithubSquare size="1.3em"/></ExternalLinks>
                        </UtilityList>
                         <ImageDiv>
                             <a href={p.source} target="blank">
                            <Image src={p.image} layout="fill" objectFit="cover" alt={p.tag} /></a>
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