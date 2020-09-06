import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SingleArticle from '../components/SingleArticle'
import Helmet from 'react-helmet'

export default function ArticlePage({ data }) {

    const { datoCmsArticle } = data
    const { poster } = datoCmsArticle

    return(
        <Layout>
            <Helmet
                title={datoCmsArticle.title}
                meta={[
                    { name: 'og:title', content: datoCmsArticle.title},
                    { name: 'og:image', content: poster.fluid.srcSet}
                ]}
            >

            </Helmet>
            <Container>
                <SingleArticle
                    title={datoCmsArticle.title}
                    body={datoCmsArticle.body}
                    src={poster.fluid.srcSet}
                    alt={poster.alt}
                />
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query getArticle($slug: String!) {
        datoCmsArticle(slug: {eq: $slug}) {
            title
            body
            poster {
                alt
                fluid {
                    srcSet
                }
            }
        }
    }
`