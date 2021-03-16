import React, { Fragment } from 'react'
import style from './styles'
import _JSXStyle from 'styled-jsx/style';

export default function SectionTitle({ title }) {
    return(
        <Fragment>
            <h2 className="section-title">
                <span>{title}</span>
            </h2>
            <style jsx>{style}</style>
        </Fragment>
    )
}
