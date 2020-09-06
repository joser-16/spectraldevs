import React, { Fragment } from "react"
import style from './styles'
import { Link } from "gatsby"

export default function Button({ children, variant, type, size, linkTo, className = '' }) {
    
    const btnVariants = ['gradient', 'ghost-light', 'ghost-dark']
    const setVariant = btnVariants.includes(variant) ? variant.toLowerCase() : 'gradient'

    const btnSizes = ['sm', 'md', 'lg']
    const setSize = btnSizes.includes(size) ? size.toLowerCase() : 'md'

    if(linkTo) {
        return(
            <Fragment>
                <Link
                    to={linkTo}
                >
                <span className={`btn ${ setVariant } ${ setSize } ${ className }`}>
                {children}
                </span>
                </Link>
                <style jsx>{style}</style>
            </Fragment>
        )
    }

    return(
        <Fragment>
            <button 
                className={`btn ${ setVariant } ${ setSize } ${ className }`}
                type={type}
            >
                {children}
            </button>
            
            <style jsx>{style}</style>
        </Fragment>
    )
}