import { useStaticQuery, graphql } from "gatsby";

export default function useServices() {
    const { allDatoCmsService } = useStaticQuery(graphql`
        query getServices {
            allDatoCmsService {
                nodes {
                    id
                    icon {
                        alt
                        url
                    }
                    title
                    body
                }
            }
        }
    `)

    return allDatoCmsService.nodes.map( service => ({
        id: service.id,
        alt: service.icon.alt,
        icon: service.icon.url,
        title: service.title,
        body: service.body
    }))

}