import React from "react";

// components
import Header from "../components/Header";
import Flex from "../components/utils/Flex";
import { Link } from "gatsby";

const FormSuccess = () => (
    <>
        <Header onHomePage={false} />
        <Flex>
            <div style={{ textAlign: "center" }}>
                <h5>
                    Thanks for your message! I'll get back to you as soon as I
                    can.
                </h5>
                <Link to="/">Back to the Homepage</Link>
            </div>
        </Flex>
    </>
);

export default FormSuccess;
