import React from "react";
import PropTypes from "prop-types";
import Helmut from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmut
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                { name: `description`, content: metaDescription },
                { property: `og:title`, content: title },
                { property: `og:description`, content: metaDescription },
                { property: `og:type`, content: `website` },
                { property: `twitter:card`, content: `summary` },
                {
                    property: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                { property: `twitter:title`, content: title },
                { property: `twitter:description`, content: `metaDescription` }
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = { lang: `en`, meta: [], description: `` };

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};

export default SEO;
