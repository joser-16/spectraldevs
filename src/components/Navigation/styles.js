import css from 'styled-jsx/css'

import { breakpoints, colors } from '../../styles/theme'

export default css`
    .nav {
        display: none;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .nav {
            display: block;
        }

        ul {
            padding: 0;
            list-style: none;
            display: flex;
        }

        .nav-item > :global(a) {
            color: ${colors.secondaryWhite};
            margin-right: 2rem;
            font-size: 1.2em;
        }
        nav > :global(a):last-child {
            margin-right: 0;
        }
    }


`