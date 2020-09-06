import css from 'styled-jsx/css'
import { others, colors } from '../../styles/theme'

export default css`
    .service-card {
        background: #fff;
        box-shadow: ${others.boxShadow};
        border-radius: 10px;
        padding: 2rem 1rem;
        min-height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .service-card-title {
        margin-bottom: .5rem;
        font-size: 1.8em;
        font-weight: 600;
        color: ${colors.blue};
    }

    .service-card-body {
        line-height: 1.75;
        font-size: 1.2em;
    }
`
