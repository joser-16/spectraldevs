import React, { Fragment } from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroBlog from "../components/Hero/HeroBlog"
import Container from "../components/Container"
import Articles from "../components/Articles"

export default function Contact() {

    return (
        <Fragment>
            <Layout marginInFooter>
                <Hero height='auto' addPadding={1.5}>
                    <HeroBlog />
                </Hero>

                <Container>
                    <Articles />
                </Container>
            </Layout>
        </Fragment>
    )

}