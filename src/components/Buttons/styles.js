import css from 'styled-jsx/css'
import { colors, others } from '../../styles/theme'

export default css`
    .btn {
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s linear;
        text-align: center;
    }

    .btn-block {
        display: block;
    }

    .gradient {
        background: ${colors.blue};
        background: ${others.primaryGradient};
        color: ${colors.secondaryWhite};
    }

    .gradient:hover {
        opacity: .8;
    }

    .ghost-light {
        background: transparent;
        border: 3px solid ${colors.secondaryWhite};
        color: ${colors.secondaryWhite};
    }

    .ghost-light:hover {
        background: ${colors.secondaryWhite};
        color: ${colors.black};
    }

    .ghost-dark {
        background: transparent;
        border: 3px solid ${colors.black};
        color: ${colors.black};
    }

    .ghost-dark:hover {
        background: ${colors.black};
        color: ${colors.secondaryWhite};
    }

    .sm {
        padding: .5em 1em;
    }
    .md {
        padding: 1.2em 1em;
        font-size: 1.3em;
    }
    .lg {
        padding: 1.5em 1em;
        font-size: 1.5em;
    }
`