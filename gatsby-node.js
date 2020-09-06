const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allDatoCmsArticle {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `)
        .then( result => {
            result.data.allDatoCmsArticle.edges.map( ({ node: article }) => {
                createPage({
                    path: `/blog/${article.slug}`,
                    component: path.resolve(`./src/templates/article.js`),
                    context: {
                        slug: article.slug
                    }
                })
            })
            resolve()
        })
    })
}
