import React, { Fragment } from 'react'
import style from './styles'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '..'
import SectionTitle from '../../SectionTitle'

export default function AboutSection() {

    const { datoCmsAbout } = useStaticQuery(graphql`
        query {
            datoCmsAbout(slug: {eq: "about"}) {
                title
                body
            }
        }
    `)

    return(
        <Fragment>
            <Section id='nosotros'>
                <SectionTitle title={datoCmsAbout.title} />
                <div
                    className="about-body"
                    dangerouslySetInnerHTML={{
                    __html: datoCmsAbout.body
                    }} 
                />
            </Section>
            <style jsx>{style}</style>
        </Fragment>
    )
}