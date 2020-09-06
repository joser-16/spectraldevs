import css from 'styled-jsx/css'

import { fonts, colors } from '../../styles/theme'

export const globalStyles = css.global`

    :root {
        --header-height: 4rem;
    }

    @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    h1 {
        margin: 0;
    }

    .w-25 { width: 25%; }
    .w-50 { width: 50%; }
    .w-75 { width: 75%; }
    .w-100 { width: 100%; }

    body {
        font-family: ${fonts.base};
        background: ${colors.secondaryWhite};
    }

    a {
        text-decoration: none;
        line-height: 0;
    }

    .img-fluid {
        width: 100%;
        height: 100%;
    }
`