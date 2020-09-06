import React from 'react'
import { breakpoints } from '../../styles/theme'
import { HOME } from '../../constants/routes'
import { Link } from 'gatsby'
import LogoSVG from '../../images/logo.svg'
import LogoMobileSVG from '../../images/mini-logo.svg'


export default function Logo() {
    return(
        <Link to={HOME}>
            <picture>
                <source
                    media={`(min-width: ${breakpoints.laptop}`}
                    srcSet={LogoSVG}
                />
                <img src={LogoMobileSVG} alt="SpectralDev Logo" />
            </picture>
        </Link>
    )
}