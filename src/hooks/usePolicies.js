import { graphql, useStaticQuery } from "gatsby";

export default function usePolicies(policy = '') {

    const policies = ['privacy', 'cookies']
    const sanityPolicy = (!policy.length || !policy || !policies.includes(policy) ) ? 'privacy' : policy

    const data = useStaticQuery(graphql`
        query {
            privacy: allDatoCmsPolicy(filter: {slug: {eq: "privacy"}}) {
                nodes {
                    title
                    body
                }
            }
            cookies: allDatoCmsPolicy(filter: {slug: {eq: "cookies"}}) {
                nodes {
                    title
                    body
                }
            }
        }
    `)

    const { title, body } = data[sanityPolicy].nodes[0]

    return { title, body }
}