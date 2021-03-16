import css from 'styled-jsx/css'

import { breakpoints, colors, others } from '../../styles/theme'

export default css`
    .nav {
        min-width: 12.5rem;
        width: 80%;
        height: 100%;
        position: fixed;
        top: 0;
        left: -100%;
        z-index: 2000;
        background: ${others.primaryGradient};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s linear;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        .nav {
            display: flex;
            width: 70%;
        }
    }
    @media screen and (min-width: ${breakpoints.xtablet}) {
        .nav {
            display: flex;
            width: 60%;
        }
    }
    @media screen and (min-width: ${breakpoints.laptop}) {
        .nav {
            display: none;
        }
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .nav-item > :global(a) {
        color: ${colors.secondaryWhite};
        font-size: 1.5em;
    }

    .nav-item:not(:first-child) {
        margin-top: 3rem;
    }

    .nav.open {
        left: 0;
    }

    .close {
        background: none;
        outline: none;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 5em;
        margin: 0;
        color: ${colors.secondaryWhite};
        cursor: pointer;
        padding: 0;
    }
`