import css from 'styled-jsx/css'
import { vars, breakpoints } from '../../styles/theme'

export default css`
    .articles {
        margin-top: ${vars.headerHeight};
        display: grid;
        grid-template-columns: repeat(1, minmax(100px, 1fr) );
        grid-gap: 2.5rem;
    }

    @media screen and (min-width: ${breakpoints.xtablet}) {
        .articles {
            grid-template-columns: repeat(2, minmax(250px, 1fr) );
        }
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .articles {
            grid-template-columns: repeat(3, minmax(250px, 1fr) );
        }
    }
`