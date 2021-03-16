import React, { Fragment } from 'react'
import style from './styles'
import _JSXStyle from 'styled-jsx/style';

export default function ServiceCard({ icon, alt, title, body }) {
    return(
        <Fragment>
            <article className="service-card">
                <img src={icon} alt={alt} />
                <p className="service-card-title">{title}</p>
                <p className="service-card-body">{body}</p>
            </article>

            <style jsx>{style}</style>
        </Fragment>
    )
}