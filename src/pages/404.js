import React from "react";

// components
import SEO from "../components/utils/SEO";
import Header from "../components/Header";
import Flex from "../components/utils/Flex";
import { Link } from "gatsby";

const FourOhFour = () => (
    <>
        <SEO title="404 Not Found" />
        <Header />
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <h1>That page doesn't exist</h1>
            <h6>404 Page not found</h6>
            <br></br>
            <br></br>
            <Flex>
                <Link to="/">Head Home</Link>
            </Flex>
        </div>
    </>
);

export default FourOhFour;
