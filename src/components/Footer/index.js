import React, { Fragment } from 'react';
import Container from '../Container';
import FooterStyles from './styles';

export default function Footer({ marginTop }) {

    const { styles, className } = FooterStyles(marginTop);

    return(
        <Fragment>
            <footer className={className}>
                <Container>
                    <p className={className}>© 2020 | Spectral Developers - Todos los derechos reservados</p>
                </Container>
            </footer>

            {styles}
        </Fragment>
    );
}