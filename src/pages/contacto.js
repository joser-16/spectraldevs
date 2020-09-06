import React, { Fragment } from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroContact from '../components/Hero/HeroContent/HeroContact'
import ContactForm from '../components/ContactForm'

export default function Contact() {

    return (
        <Fragment>
            <Layout>
                <Hero height='auto' addPadding={2}>
                    <HeroContact />
                </Hero>

                <ContactForm />
            </Layout>
        </Fragment>
    )

}