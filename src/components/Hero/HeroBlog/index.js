import React, { Fragment } from 'react'
import style from './styles'

export default function HeroBlog() {
    return(
        <Fragment>
            <div className="hero-info">
                <h1>Spectral<span>Blog</span></h1>
                <p>Consulta nuestros artículos sobre tecnología y aprende con nosotros sobre este maravilloso mundo.</p>
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
}