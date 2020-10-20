import React from 'react'
import css from 'styled-jsx/css'
import { colors, vars } from '../../styles/theme'

export default function FooterStyles(marginTop = null) {

    const styles = css.resolve`
        footer {
            background: ${colors.black};
            margin-top: ${marginTop ? vars.headerHeight : '0'};
        }

        p {
            color: ${colors.white};
            text-align: center;
        }
    `
    return (styles)
}