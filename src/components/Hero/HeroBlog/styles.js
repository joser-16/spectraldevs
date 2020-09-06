import css from 'styled-jsx/css'

import { breakpoints, colors } from '../../../styles/theme'

export default css`
    .hero-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 1em;
        color: ${colors.white}
    }
    .hero-info p {
        line-height: 1.75;
        font-weight: 200;
        font-size: 1.2em;
    }

    @media screen and (min-width: ${breakpoints.laptop}) {
        .hero-info p {
            width: 50%;
        }
    }

    .hero-info h1 {
        font-size: 2.5em;
        font-weight: 200;
    }
    .hero-info span {
        font-weight: 700;
        color: ${colors.blue};
    }


`