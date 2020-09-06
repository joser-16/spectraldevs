import React, { Fragment } from "react"
import style from './styles'
import LocalImage from "../../LocalImage"


export default function HeroContact() {
    return(
        <Fragment>
            <div>
                <h1>Contacta con nuestro <span>equipo</span></h1>
                <div className="hero-info">
                    <p>No dudes en contactarnos si tienes un proyecto en mente, podemos ayudarte a hacerlo realidad.</p>
                    <div className="hero-contact">
                        <LocalImage imgName='email-icon' alt='Email icon' className='hero-contact-icon' />
                        <p>info@spectraldevs.com</p>
                    </div>
                </div>
            </div>
            <div>
                <LocalImage imgName='send-mail' alt='Send Email' className='hero-picture' />
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
}