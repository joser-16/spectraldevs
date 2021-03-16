import css from 'styled-jsx/css'

import { breakpoints } from '../../styles/theme'

export default css`
    .logo {
        width: 3rem;
    } 

    @media screen and (min-width: ${breakpoints.laptop}) {
        .logo {
            width: 6rem;
        }
    }
`