import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// components
import Img  from "gatsby-image";

const LogoImg = ({ style }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 238, toFormat: WEBP) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Logo"
            style={style}
        />
    );
};


export default LogoImg;
