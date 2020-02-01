import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// components
import Img from "gatsby-image";

const Image = ({ style, durationFadeIn }) => {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(relativePath: { eq: "madeon.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    );
    return (
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            fadeIn={true}
            durationFadeIn={durationFadeIn}
            style={{ ...style, filter: "blur(16px)" }}
        />
    );
};

export default Image;
