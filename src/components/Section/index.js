import React, { Fragment } from 'react'
import style from './styles'

export default function Section({ children, id }) {
    return(
        <Fragment>
            <section id={id}>
                {children}
            </section>

            <style jsx>{style}</style>
        </Fragment>
    )
}