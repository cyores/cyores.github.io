import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

// icons
import { IoLogoLinkedin, IoLogoGithub, IoIosArrowDown } from "react-icons/io";

// components
import Header from "../components/Header";
import Flex from "../components/utils/Flex";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";

const AnimateScrollDownArrow = styled.div`
    @keyframes fadeIn {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        100% {
            transform: translateY(25px);
            opacity: 1;
        }
    }
    transform: translateY(0%);
    animation-name: fadeIn;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
`;

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

            <div
                className="container"
                style={{ marginTop: "16vh", marginBottom: "16vh" }}
            >
                <h1
                    style={{
                        fontSize: "calc(1.75 * var(--text-xxxxl))",
                        lineHeight: 1
                    }}
                >
                    {data.site.siteMetadata.title}
                </h1>

                <h3 style={{ marginTop: "-33px", marginBottom: 0 }}>
                    Full Stack Developer
                </h3>

                <br></br>

                <Flex dir="rowleft">
                    <div
                        style={{
                            width: "8vw",
                            height: "4px",
                            background: "var(--color-primary)"
                        }}
                    ></div>
                </Flex>

                <br></br>

                <Flex dir="rowleft">
                    <a
                        href="https://linkedin.com/in/christianyores"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoLinkedin
                            style={{
                                color: "var(--color-text)",
                                fontSize: "var(--text-xxxxl)",
                                marginRight: "var(--space-xxxxs)"
                            }}
                        />
                    </a>
                    <a
                        href="https://github.com/cyores"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub
                            style={{
                                color: "var(--color-text)",
                                fontSize: "var(--text-xxxxl)",
                                marginLeft: "var(--space-xxxxs)"
                            }}
                        />
                    </a>
                </Flex>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "33px",
                    width: "100%"
                }}
            >
                <Flex>
                    <AnimateScrollDownArrow>
                        <IoIosArrowDown
                            style={{ fontSize: "var(--text-xxl)" }}
                        />
                    </AnimateScrollDownArrow>
                </Flex>
            </div>

            <br></br>

            <div className="container-full">
                <Education />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Experience />
            </div>

            <footer
                style={{
                    background: "var(--color-fg)",
                    height: "25vh",
                    marginTop: "var(--space-xxxxl)",
                    textAlign: "center"
                }}
            >
                <Flex>
                    <div>
                        <p>© {new Date().getFullYear()} Christian Yores</p>
                        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </div>
                </Flex>
            </footer>
        </>
    );
};

export default Index;
