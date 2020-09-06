import { useStaticQuery, graphql } from "gatsby";

export default function useSEO() {
    const { datoCmsSite } = useStaticQuery(graphql`
    query {
        datoCmsSite {
            globalSeo {
                facebookPageUrl
                siteName
                titleSuffix
                fallbackSeo {
                    description
                    title
                    twitterCard
                    image {
                        url
                    }
                }
            }
            faviconMetaTags {
                tags
            }
        }
    }`)

    const SEO = datoCmsSite.globalSeo

    const favicon = datoCmsSite.faviconMetaTags.tags.map( tag => ({
        tagName: tag.tagName,
        attributes: tag.attributes
    }))

    return {
        facebookPageUrl: SEO.facebookPageUrl,
        siteName: SEO.siteName,
        titleSuffix: SEO.titleSuffix,
        description: SEO.fallbackSeo.description,
        title: SEO.fallbackSeo.title,
        twitterCard: SEO.fallbackSeo.twitterCard,
        imageUrl: SEO.fallbackSeo.image.url,
        favicon
    }


}