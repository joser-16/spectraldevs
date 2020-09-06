import css from 'styled-jsx/css'

import { colors } from '../../../styles/theme'

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

    .hero-info h3 {
        font-size: 2.5em;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 5rem;
    }
`