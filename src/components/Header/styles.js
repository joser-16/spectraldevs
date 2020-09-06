import css from 'styled-jsx/css'

import { breakpoints, colors, vars } from '../../styles/theme'

export default css`
    header {
        width: 100%;
        height: ${vars.headerHeight};
        background: ${colors.black};
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 100;
    }

    .h-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .menu-bars {
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
    }

    .menu-bars-icon {
        display: block;
        width: 40px;
        height: 5px;
        background: ${colors.secondaryWhite};
        margin-bottom: .5rem;
        border-radius: 5px;
    }

    .menu-tooltip {
        display: none;
    }

    .menu-bars-icon:last-child {
        margin-bottom: 0;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .menu-bars {
            display: none;
        }
    }
`