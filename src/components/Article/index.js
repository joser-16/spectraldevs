import React, { Fragment } from 'react'
import style from './styles'
import { Link } from 'gatsby'
import _JSXStyle from 'styled-jsx/style';

export default function Article({ imgData, title, slug, date }) {
    return(
        <Fragment>
            <article className="article">
                <div className="article-poster">
                    <Link to={slug}>
                        <img 
                            src={imgData.fluid.srcSet} 
                            alt={imgData.alt} 
                            className="img-fluid"
                            loading="lazy" 
                        />
                    </Link>
                </div>
                <div className="article-title">
                    <Link to={slug}>{title}</Link>
                </div>
            </article>
            <style jsx>{style}</style>
        </Fragment>
    )
}