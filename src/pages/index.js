import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroHome from '../components/Hero/HeroContent/HeroHome'
import Container from '../components/Container'
import AboutSection from '../components/Section/AboutSection'
import ExperienceSection from '../components/Section/ExperienceSection'
import ServicesSection from '../components/Section/ServicesSection'
import ContactSection from '../components/Section/ContactSection'
import PlansSection from '../components/Section/PlansSection'

export default function Home() {

  return (
    <Layout>
      <Hero height='auto' addPadding={2}>
        <HeroHome />
      </Hero>

      <Container>
        <AboutSection />
      </Container>

      <ExperienceSection />

      <Container>
        <ServicesSection />
      </Container>

      <ContactSection />
      
      <Container>
        <PlansSection />
      </Container>
    </Layout>
  )

}