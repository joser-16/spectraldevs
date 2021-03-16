import React, { Fragment } from 'react'
import style from './styles'
import Button from '../../Buttons'
import { CONTACT } from '../../../constants/routes'
import _JSXStyle from 'styled-jsx/style';

export default function HeroContactSection({ title }) {
    return(
        <Fragment>
            <div className="hero-info">
                <h3>{title}</h3>
                
                <Button
                    variant={'ghost-light'}
                    linkTo={CONTACT}
                    size='lg'
                    className="btn-block w-100"
                >Solicitalo aquí</Button>
                
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
}