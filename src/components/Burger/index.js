import React, { Fragment } from "react"
import styles from './styles'
import { CONTACT, BLOG } from "../../constants/routes"
import { Link } from "gatsby"
import _JSXStyle from 'styled-jsx/style';

export default function Burger({ isOpen }) {
    return(
        <Fragment>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className="nav-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#servicios">Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#planes">Planes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={BLOG}>Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={CONTACT}>Contacto</Link>
                    </li>
                </ul>
            </nav>

            <style jsx>{styles}</style>
        </Fragment>
    )
}