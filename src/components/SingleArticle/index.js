import React, { Fragment } from 'react'
import style from './styles'
import _JSXStyle from 'styled-jsx/style';

export default function SingleArticle({ title, src, alt, body }) {
    return(
        <Fragment>
            <article>
                <h1 className="article-title">{title}</h1>
                <img src={src} alt={alt} className="img-fluid" />
                <section 
                    className="article-body"
                    dangerouslySetInnerHTML={{
                        __html: body
                    }}
                />
            </article>
            <style jsx>{style}</style>
        </Fragment>
    )
}