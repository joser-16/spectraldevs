import { useStaticQuery, graphql } from "gatsby";

export default function useExperiences() {
    const { allDatoCmsExperience } = useStaticQuery(graphql`
        query getExperiences {
            allDatoCmsExperience {
                nodes {
                    id
                    icon {
                        alt
                        url
                    }
                    data
                    title
                }
            }
        }
    `)

    return allDatoCmsExperience.nodes.map( exp => ({
        id: exp.id,
        alt: exp.icon.alt,
        icon: exp.icon.url,
        data: exp.data,
        title: exp.title
    }))

}