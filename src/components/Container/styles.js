import css from 'styled-jsx/css'
import { breakpoints } from '../../styles/theme'

export default css`
    .container {
        max-width: ${breakpoints.desktop};
        width: calc(100% - 1rem);
        margin: 0 auto;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        .container {
            width: calc(100% - 2rem);
        }
    }

    @media screen and (min-width: ${breakpoints.xdesktop}) {
        .container {
            width: 100%;
        }
    }

`