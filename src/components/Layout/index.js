import React, { Fragment } from "react";
import Header from "../Header";
import { globalStyles } from "./styles";
import { Helmet } from "react-helmet";
import useSEO from "../../hooks/useSEO";
import Footer from "../Footer";

export default function Layout({ children }) {

    const { 
        title,
        titleSuffix,
        description,
        twitterCard,
        imageUrl
    } = useSEO()

    return(
        <Fragment>
            <Helmet 
                title={`${title}${titleSuffix}`}
                meta={[
                    { charSet: 'utf-8' },
                    { name: 'description', content: description},
                    { name: 'twitter:card', content: twitterCard},
                    { name: 'og:title', content: `${title}${titleSuffix}`},
                    { name: 'og:description', content: description},
                    { name: 'og:image', content: imageUrl}
                ]}
            >
                <html lang="es"/>
            </Helmet>

            <div className="wrapper">
                <Header />
                <main>
                    {children}
                </main>

                <Footer />
            </div>

            <style jsx global>
                {globalStyles}
            </style>
        </Fragment>
    );
}