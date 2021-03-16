import React, { Fragment } from 'react'
import { breakpoints } from '../../styles/theme'
import styles from './styles';
import { HOME } from '../../constants/routes'
import { Link } from 'gatsby'
import LogoSVG from '../../images/logo.svg'
import LogoMobileSVG from '../../images/mini-logo.svg'
import _JSXStyle from 'styled-jsx/style';


export default function Logo() {
    return(
        <Fragment>
            <Link to={HOME}>
                <picture>
                    <source
                        media={`(min-width: ${breakpoints.laptop}`}
                        srcSet={LogoSVG}
                    />
                    <img src={LogoMobileSVG} className="logo" alt="DarkZun Logo" />
                </picture>
            </Link>

            <style jsx>{styles}</style>
        </Fragment>
    )
}