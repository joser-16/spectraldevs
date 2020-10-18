import React, { Fragment } from 'react';
import Container from '../Container';
import styles from './styles';

export default function Footer() {
    return(
        <Fragment>
            <footer>
                <Container>
                    <h2>Footer</h2>
                </Container>
            </footer>

            <style jsx>{styles}</style>
        </Fragment>
    );
}