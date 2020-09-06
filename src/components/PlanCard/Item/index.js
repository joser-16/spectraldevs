import React, { Fragment } from 'react'
import style from './styles'

export default function Item({ url, alt, item }) {
    return(
        <Fragment>
            <div className="plan-item">
                <img src={url} alt={alt} className="plan-icon" />
                <p>{item}</p>
            </div>

            <style jsx>{style}</style>
        </Fragment>
    )
}