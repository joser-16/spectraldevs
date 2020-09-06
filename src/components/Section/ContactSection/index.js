import React, { Fragment } from 'react'
import Section from '..'
import Hero from '../../Hero'
import { useStaticQuery, graphql } from 'gatsby'
import HeroContactSection from '../../Hero/HeroContactSection'

export default function ContactSection() {

    const { allDatoCmsContactSection } = useStaticQuery(graphql`
        query {
            allDatoCmsContactSection(filter: {slug: {eq: "contact-section"}}) {
                nodes {
                  title
                  background {
                    sizes(maxHeight: 600, imgixParams: {fm: "webp", auto: "compress"}) {
                      aspectRatio
                      src
                    }
                  }
                }
              }
        }
    `)

    const { title, background } = allDatoCmsContactSection.nodes[0]

    return(
        <Fragment>
            <Section>
                <Hero
                    height='400px'
                    backgroundImage={background.sizes.src}
                >
                    <HeroContactSection title={title} />
                </Hero>
            </Section>
        </Fragment>
    )
}