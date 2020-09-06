import React, { Fragment } from 'react'
import style from './styles'
import Section from '..'
import SectionTitle from '../../SectionTitle'
import usePlans from '../../../hooks/usePlans'
import PlanCard from '../../PlanCard'

export default function PlansSection() {

    const plans = usePlans()

    return(
        <Fragment>
            <Section id='planes'>
                <SectionTitle title='Nuestros planes' />
                <section className="plans">
                    {plans.map( plan => (
                        <PlanCard
                            key={plan.id}
                            title={plan.title}
                            price={plan.price}
                            details={plan.details}
                            important={plan.important}
                            items={plan.items}
                            order={plan.order}
                            url={plan.url}
                            alt={plan.alt}
                        />
                    ))}
                </section>
            </Section>
            <style jsx>{style}</style>
        </Fragment>
    )
}