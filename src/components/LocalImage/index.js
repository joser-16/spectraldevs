import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function LocalImage({imgName, alt, className}) {
    return <StaticQuery
        query={graphql`
            query {
                images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
                    nodes {
                        name
                        publicURL
                    }
                }
            }
        `}

    render={ data => {
        const image = data.images.nodes.find( image => {
            return image.name === imgName
        })
        return (
            <img 
                src={image?.publicURL} 
                alt={alt}
                className={className}
                loading="lazy"
            />
        )
    }}
  />
}