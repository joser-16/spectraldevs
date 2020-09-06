import css from 'styled-jsx/css'

import { vars, colors, breakpoints } from '../../styles/theme'

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

    .article-title {
        color: ${colors.black};
        margin-bottom: 1rem;
    }

    .article-body {
        margin-top: ${vars.headerHeight};
    }

    .article-body > :global(p) {
        line-height: 1.75;
        text-align: justify !important;
    }

    @media screen and (min-width: ${breakpoints.xtablet}) {
        .article-body > :global(p) {
            text-align: left !important;
        }
    }

    .article-body > :global(blockquote) {
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