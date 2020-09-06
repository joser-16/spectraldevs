import css from 'styled-jsx/css'
import { colors, breakpoints } from '../../styles/theme';

export default css`
    .article {

    }

    .article-poster {
        border-radius: 10px;
        background: #f1f1f1;
        height: 250px;
        overflow: hidden;
    }

    @media screen and (min-width: ${breakpoints.phone}) {
        .article-poster {
            height: 350px;
        }
    }

    @media screen and (min-width: ${breakpoints.xtablet}) {
        .article-poster {
            height: 280px;
        }
    }

    .article-title {
        font-size: 1.3em;
        margin-top: .5rem;
    }

    .article-title > :global(a) {
        color: ${colors.black};
    }

    .article-poster img {
        transition: .3s linear;
    }

    .article-poster img:hover {
        transform: scale(1.2);
    }

    .article-date {
        color: ${colors.black}88;
    }
`