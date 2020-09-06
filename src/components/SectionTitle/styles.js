import css from 'styled-jsx/css'

import { others, breakpoints, colors } from '../../styles/theme'

export default css`
    .section-title {
        font-size: 2em;
        font-weight: 600;
        text-align: center;
        margin-top: 0;
        margin-bottom: 3rem;
        color: ${colors.black};
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        .section-title {
            font-size: 2.5em;
        }
    }

    .section-title span {
        position: relative;
    }

    .section-title span::after {
        content: '';
        position: absolute;
        width: 30%;
        height: 5px;
        background: ${others.primaryGradient};
        bottom: -1rem;
        left: 50%;
        margin-left: -15%;
    }
`