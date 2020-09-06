import React from 'react'
import Layout from '../components/Layout'
import PoliciesSection from '../components/Section/PoliciesSection'

export default function CookiesPage() {
    return(
        <Layout>
            <PoliciesSection policy='cookies' />
        </Layout>
    )
}