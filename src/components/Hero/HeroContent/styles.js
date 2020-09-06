import css from 'styled-jsx/css'
import { breakpoints, colors } from '../../../styles/theme'

export default css`
    h1 {
        font-weight: 200;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        h1 {
            font-size: 2em;
        }
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
        h1 {
            font-size: 3em;
        }
    }

    h1 span {
        font-weight: 700;
        color: ${colors.white};
    }

    p {
        margin: 1.5rem 0;
        font-weight: 200;
        line-height: 1.65;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .hero-info {
            width: 90%;
        }
        p {
            font-size: 1.1em;
        }
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
        .hero-info {
            width: 70%;
        }
        p {
            font-size: 1.2em;
        }
    }

    :global(.hero-picture) {
        display: none;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        :global(.hero-picture) {
            display: block;
        }
    }

    .hero-contact {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .hero-contact {
            justify-content: flex-start;
        }
    }

    :global(.hero-contact-icon) {
        margin-right: .5rem;
    }

    .hero-contact p {
        margin: 0;
        font-weight: 400;
        font-size: 1.2em;
    }
`