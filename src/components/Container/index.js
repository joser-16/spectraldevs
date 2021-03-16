import React, { Fragment } from "react";
import style from "./styles";
import _JSXStyle from 'styled-jsx/style';

export default function Container({ children }) {

    return(
        <Fragment>
            <div className='container'>
                {children}
            </div>

            <style jsx>{style}</style>
        </Fragment>
    )
}