import React from "react";

// components
import Flex from "./utils/Flex";

const Footer = () => (
    <footer
        style={{
            background: "var(--color-fg)",
            minHeight: "10vh",
            marginTop: "calc(2 * var(--space-xxxxl))",
            textAlign: "center",
            padding: "var(--space-md) 0"
        }}
    >
        <Flex>
            <div>
                <p>© {new Date().getFullYear()} Christian Yores</p>
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                <br></br>
                Background by{" "}
                <a
                    href="https://svgbackgrounds.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SVGBackgrounds.com.
                </a>
                <br></br>
                <br></br>
            </div>
        </Flex>
    </footer>
);

export default Footer;
