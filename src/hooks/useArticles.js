import { useStaticQuery, graphql } from "gatsby";

export default function useArticles() {
    const { allDatoCmsArticle } = useStaticQuery(graphql`
        query getArticles {
            allDatoCmsArticle {
                nodes {
                    id
                    title
                    slug
                    poster {
                        alt
                        fluid {
                            srcSet
                        }
                    }
                }
            }
        }
    `)

    return allDatoCmsArticle.nodes.map( article => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        poster: article.poster
    }))

}