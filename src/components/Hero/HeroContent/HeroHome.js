import React, { Fragment } from "react"
import style from './styles'
import { CONTACT } from '../../../constants/routes'
import Button from "../../Buttons"
import LocalImage from "../../LocalImage"
import _JSXStyle from 'styled-jsx/style';

export default function HeroHome() {
    return(
        <Fragment>
            <div>
                <h1>Desarrollo web <span>profesional</span></h1>
                <div className="hero-info">
                    <p>Nuestro objetivo principal es dar un servicio optimo a nuestros clientes y hacer que sus negocios puedan dar el siguiente paso a la era digital.</p>
                    <Button
                        linkTo={CONTACT}
                        size="lg"
                        className="btn-block w-100"
                    >Contactanos</Button>
                </div>
            </div>
            <div>
                <LocalImage imgName='freelancer' alt='Freelancer' className='hero-picture' />
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
}