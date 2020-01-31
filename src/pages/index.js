import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// components
import Header from "../components/Header";

const Index = () => {
    const data = useStaticQuery(
        graphql`
            query Index_SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
    return (
        <>
            <Header />
            <h1>{data.site.siteMetadata.title}</h1>
        </>
    );
};

export default Index;
