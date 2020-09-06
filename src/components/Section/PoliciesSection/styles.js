import css from 'styled-jsx/css'

import { vars, colors, breakpoints } from '../../../styles/theme'

export default css`
    article {
        width: 100%;
        margin: auto;
        padding-top: calc(${vars.headerHeight} * 2);
    }

    @media screen and (min-width: ${breakpoints.xtablet}) {
        article {
            width: 80%;
        }
    }

    .policy-title {
        color: ${colors.black};
    }

    .policy-body {
        margin-top: calc(${vars.headerHeight} / 2);
    }

    .policy-body > :global(p) {
        line-height: 1.75;
        text-align: justify !important;
    }

    @media screen and (min-width: ${breakpoints.xtablet}) {
        .policy-body > :global(p) {
            text-align: left !important;
        }
    }

    .policy-body > :global(blockquote) {
        background: #33333311;
        border-left: 5px solid ${colors.blue};
        margin: 0;
        padding: 1em;
        border-radius: 5px;
    }

    :global(blockquote) > :global(p) {
        margin: 0;
        line-height: 1.75;
    }
`