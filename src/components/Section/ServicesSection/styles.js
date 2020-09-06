import css from 'styled-jsx/css'
import { breakpoints } from '../../../styles/theme'

export default css`
    .services {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        .services {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .services {
            grid-gap: 3rem;
            grid-template-columns: repeat(3, 1fr);
        }
    }
`
