import { useStaticQuery, graphql } from "gatsby";

export default function useDiscount() {
    const { datoCmsDiscount } = useStaticQuery(graphql`
        query {
            datoCmsDiscount(slug: {eq: "descuento"}) {
                percentage
            }
        }
    `)
    const percentage = datoCmsDiscount.percentage || 0,
        discountEnable = (datoCmsDiscount.percentage && datoCmsDiscount.percentage > 0) ? true : false

    return { discountEnable, percentage }
}