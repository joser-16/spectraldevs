import React, { Fragment } from 'react'
import style from './styles'

export default function ExperienceItem({ img, alt, data, title }) {
    return(
        <Fragment>
            <div className="experience-item">
                <img src={img} alt={alt} loading='lazy' />
                <p className="experience-data">{data}</p>
                <p className="experience-title">{title}</p>
            </div>

            <style jsx>{style}</style>
        </Fragment>
    )
}