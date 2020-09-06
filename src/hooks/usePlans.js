import { useStaticQuery, graphql } from "gatsby";

export default function usePlans() {
    const { allDatoCmsPlan } = useStaticQuery(graphql`
        query {
            allDatoCmsPlan {
                nodes {
                    id
                    title
                    price
                    details
                    important
                    items {
                        title
                    }
                    itemIcon {
                        alt
                        url
                    }
                    order
                }
            }
        }
    `)

    return allDatoCmsPlan.nodes.map( plan => ({
        id: plan.id,
        title: plan.title,
        price: plan.price,
        details: plan.details,
        important: plan.important,
        items: plan.items.map( item => item.title ),
        alt: plan.itemIcon.alt,
        url: plan.itemIcon.url,
        order: plan.order
    }))

}