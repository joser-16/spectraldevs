import React, { Fragment } from 'react'
import style from './styles'
import Section from '..'
import SectionTitle from '../../SectionTitle'
import useServices from '../../../hooks/useServices'
import ServiceCard from '../../ServiceCard'


export default function ServicesSection() {

    const services = useServices()

    return(
        <Fragment>
            <Section id='servicios'>
                <SectionTitle title='¿Qué servicios ofrecemos?' />
                <div className="services">
                    {services.map( service => (
                        <ServiceCard 
                            key={service.id}
                            icon={service.icon}
                            alt={service.alt}
                            title={service.title}
                            body={service.body}
                        />
                    ))}
                </div>
            </Section>

            <style jsx>{style}</style>
        </Fragment>
    )
}