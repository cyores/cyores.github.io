import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// components
import Header from "../components/Header";
import Flex from "../components/utils/Flex";

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

            <Flex>
                <h1>{data.site.siteMetadata.title}</h1>
            </Flex>
        </>
    );
};

export default Index;
