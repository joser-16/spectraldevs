import css from 'styled-jsx/css'
import { breakpoints, colors, others } from '../../styles/theme'

export default css`
    /** FORM **/
    .form-container {
        background: ${colors.white};
        margin: 0 auto;
    }
    .form-content {
        padding: 2rem 0;
    }
    .check-message {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }
    .check-icon path {
        fill: #25C613;
    }
    .check-message p {
        margin-left: 10px;
        color: #25C613;
        font-size: 1rem;
        font-weight: 500;
    }
    .form-content h2{
        margin-bottom: 2rem;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 400;
        color: ${colors.black};
    }
    .form-component label {
        font-size: 1em;
        font-weight: 400;
        color: ${colors.black};
    }
    .form-component span {
        color: #ff5a5a;
    }
    .form-component input, select, textarea{
        height: 3.5rem;
        width: 100%;
        font-size: 1rem;
        border: 1px solid rgba(128, 128, 128,  0.4);
        border-radius: 5px;
        margin: 5px 0 20px 0;
        padding: 0.625rem;
    }
    .form-component textarea {
        height: 8rem;
        margin-bottom: 20px;
        min-height: 5rem;
        resize: vertical;
    }

    /* Responsive */
    @media screen and (min-width: ${breakpoints.laptop}) {
        .form-container {
            background: ${colors.secondaryWhite};
        }
        .form-content {
            background: ${colors.white};
            box-shadow: ${others.boxShadow};
        }
        .check-message {
            margin-bottom: 1rem;
        }
        .check-message p {
            margin-left: 15px;
            font-size: 1.5rem;
        }
        .form-content h2{
            font-size: 1.5rem;
            font-weight: 400;
        }
        .form-group {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 20px;
        }
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
        .check-message p {
            margin-left: 20px;
            font-size: 2rem;
        }
        .form-content h2{
            margin-bottom: 3rem;
            font-size: 1.8rem;
        }
    }
`