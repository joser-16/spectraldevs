import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    div {
        display: flex;
        align-items: center;
    }

    svg {
        height: 1.2rem;
        margin-right: .3rem;
        fill: ${colors.black}88;
    }

    p {
        color: ${colors.black}88;
    }
`
