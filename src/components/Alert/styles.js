import css from 'styled-jsx/css'
import { breakpoints } from '../../styles/theme'

export default css`
    .check-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        .check-message {
            flex-direction: row;
        }
    }

    .check-icon {
        height: 3rem;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        .check-icon {
            height: 2rem;
        }
    }

    .check-icon path {
        fill: #25C613;
    }
    .check-message p {
        margin-left: .5rem;
        color: #25C613;
        font-size: .9rem;
        font-weight: 500;
        text-align: center;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        .check-message p {
            font-size: 1.2rem;
        }
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
        .check-message p {
            font-size: 1.5rem;
        }
    }
`