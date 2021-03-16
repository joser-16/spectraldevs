import React, { Fragment } from 'react'
import style from './styles'
import usePolicies from '../../../hooks/usePolicies'
import Container from '../../Container'
import _JSXStyle from 'styled-jsx/style';

export default function PoliciesSection({ policy }) {

    const { title, body } = usePolicies(policy)

    console.log(title, body)

    return (
        <Fragment>
            <Container>
                <article>
                    <h1 className="policy-title">{title}</h1>
                    <section 
                        dangerouslySetInnerHTML={{
                            __html: body
                        }}
                        className="policy-body"
                    />
                </article>
            </Container>
            <style jsx>{style}</style>
        </Fragment>
    )
}