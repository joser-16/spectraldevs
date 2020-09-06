import React, { Fragment } from 'react'
import Article from '../Article'
import style from './styles'
import useArticles from '../../hooks/useArticles'

export default function Articles() {

    const articles = useArticles()

    return(
        <Fragment>
            <section className="articles">
                {articles.map( article => 
                    <Article 
                        key={article.id}
                        title={article.title}
                        slug={article.slug}
                        imgData={article.poster}
                    />
                )}
            </section>
            <style jsx>{style}</style>
        </Fragment>
    )
}
