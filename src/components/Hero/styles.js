import React from 'react'
import css from 'styled-jsx/css'
import { breakpoints, colors, vars } from '../../styles/theme'

export default function HeroStyles(height = '500px', backgroundImage = null, addPadding = 0) {

    const styles = css.resolve`
        .hero {
            background: ${colors.black} center / cover;
            min-height: ${height};
            width: 100%;
            position: relative;
        }

        .hero-img {
            width : 100%;
            height : 100%;
            object-fit : cover;
            opacity: .1;
            position : absolute;
        }

        .hero::before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: ${backgroundImage ? .7 : 0};
        }

        .hero-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            min-height: ${height};
            color: ${colors.secondaryWhite};
            padding-top: ${addPadding ? `calc(${vars.headerHeight} * ${addPadding})` : `0`};
            padding-bottom: ${addPadding ? ` calc(calc(${vars.headerHeight} * ${addPadding}) - ${vars.headerHeight})` : `0`};
        }

        @media screen and (min-width: ${breakpoints.laptop}) {
            .hero-wrapper {
                flex-direction: row;
                text-align: left;
            }
        }

        .hero-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            z-index: 10;
        }
    `
    return (styles)
}