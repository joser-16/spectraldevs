import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

export default function Img({ src = '', className, alt }) {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "images/freelancer.svg" }) {
            childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const images = ['freelancer']
    
    if(images.includes( src.toLowerCase() )) {
        return <Image
            fluid={data.image.childImageSharp.fluid}
            className={className}
            alt={alt}
        />
    }

    return <Image />
}
