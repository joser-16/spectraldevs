import React, { Fragment } from 'react'
import Section from '..'
import Hero from '../../Hero'
import Container from '../../Container'
import ExperienceItem from '../../ExperienceItem'
import style from './styles'
import useExperiences from '../../../hooks/useExperiences'

export default function ExperienceSection() {

    const experiences = useExperiences()

    return (
        <Fragment>
            <Section>
                <Hero height='auto'>
                    <Container>
                        <div className="experience">
                            {experiences.map( exp => (
                                <ExperienceItem 
                                    key={exp.id}
                                    img={exp.icon}
                                    alt={exp.alt}
                                    data={exp.data}
                                    title={exp.title}
                                />
                            ))}
                        </div>
                    </Container>
                </Hero>
            </Section>

            <style jsx>{style}</style>
        </Fragment>
    )
}