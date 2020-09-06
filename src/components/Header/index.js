import React, { Fragment } from "react"
import styles from './styles'
import Logo from "../Logo"
import Navigation from "../Navigation"
import Container from "../Container"

export default function Header() {
    return(
        <Fragment>
            <header>
                <Container className="h-container">
                    <div className="h-container">
                        <Logo />

                        <Navigation />

                        <button className="menu-bars" aria-label="Open menu">
                            <span className="menu-bars-icon"></span>
                            <span className="menu-bars-icon"></span>
                            <span className="menu-bars-icon"></span>
                        </button>
                    </div>
                </Container>
            </header>

            <style jsx>{styles}</style>
        </Fragment>
    )
}