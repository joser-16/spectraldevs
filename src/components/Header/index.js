import React, { Fragment, useState } from "react"
import styles from './styles'
import Logo from "../Logo"
import Navigation from "../Navigation"
import Container from "../Container"
import Burger from "../Burger"

export default function Header() {

    const [open, setIsOpen] = useState(false);

    return(
        <Fragment>
            <Burger isOpen={open} />
            <header>
                <Container className="h-container">
                    <div className="h-container">
                        <Logo />

                        <Navigation />

                        <button className="menu-bars" aria-label="Open menu" onClick={() => setIsOpen(!open)}>
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