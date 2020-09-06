import React from 'react'
import Layout from '../components/Layout'
import PoliciesSection from '../components/Section/PoliciesSection'

export default function PrivacyPage() {
    return(
        <Layout>
            <PoliciesSection policy='privacy' />
        </Layout>
    )
}