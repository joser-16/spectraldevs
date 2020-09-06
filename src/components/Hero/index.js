import React, { Fragment } from "react"
import HeroStyles from './styles'
import Container from "../Container"

export default function Hero({children, height, backgroundImage, addPadding, enablePaddingBottom}){

    const { styles, className } = HeroStyles(height, backgroundImage, addPadding, enablePaddingBottom);

    return (
        <Fragment>
            <section className={`${className} hero`}>
                { backgroundImage 
                    &&
                    <img 
                        src={backgroundImage}
                        alt='Hero background'
                        className={`${className} hero-img`}
                        loading='lazy'
                    />
                }
                <Container>
                    <div className={`${className} hero-wrapper`}>
                        <div className={`${className} hero-content`}>
                            {children}
                        </div>
                    </div>
                </Container>
            </section>
            {styles}
        </Fragment>
    )
}