import React, { Fragment } from 'react';
import Container from '../Container';
import FooterStyles from './styles';
import _JSXStyle from 'styled-jsx/style';

export default function Footer({ marginTop }) {

    const { styles, className } = FooterStyles(marginTop);

    return(
        <Fragment>
            <footer className={className}>
                <Container>
                    <p className={className}>© 2020 | Darkzun - Todos los derechos reservados</p>
                </Container>
            </footer>

            {styles}
        </Fragment>
    );
}