import React, { Fragment } from "react";
import style from "./styles";

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