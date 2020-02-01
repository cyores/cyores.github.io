import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// components
import Header from "../components/Header";
import Madeon from "../components/utils/Madeon";
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
                <Madeon
                    // style={{ width: "400px", clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
                    style={{
                        width: "16%",
                        overflowY: "hidden",
                        // transform: "rotate(90deg) translateX(-500px)",
                        marginBottom: "-200px",
                        clipPath: "polygon(50% 0, 100% 50%, 50% 50%, 0 50%)"
                    }}
                    durationFadeIn={1500}
                />
            </Flex>

            <Flex>
                <h1>{data.site.siteMetadata.title}</h1>
            </Flex>
        </>
    );
};

export default Index;
