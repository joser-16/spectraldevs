import React, { Fragment } from "react"
import style from './styles'
import Button from "../Buttons"
import { CONTACT, BLOG } from "../../constants/routes"
import { Link } from "gatsby"
import _JSXStyle from 'styled-jsx/style';

export default function Navigation() {
    return(
        <Fragment>
            <nav className="nav">
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
                    <li>
                        <Button variant="ghost-light" size="sm" linkTo={CONTACT}>Contáctanos</Button>
                    </li>
                </ul>
            </nav>

            <style jsx>{style}</style>
        </Fragment>
    )
}