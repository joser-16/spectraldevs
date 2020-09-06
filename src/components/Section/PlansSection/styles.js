import css from 'styled-jsx/css'
import { breakpoints } from "../../../styles/theme";

export default css`
    .plans {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3rem;
    }

    @media screen and (min-width: ${breakpoints.xtablet}) {
        .plans {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .plans {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`