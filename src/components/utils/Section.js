import React from "react";
import MadeonImg from "../../images/madeonBG.jpg";

// components
import Flex from "./Flex";

const Section = ({ title, children }) => {
    return (
        <div style={{ margin: "var(--space-xxl) 0" }}>
            <Flex>
                <div style={{ flex: "1 0 360px", margin: "0 var(--space-sm)" }}>
                    <h4>{title}</h4>
                    <div
                        style={{
                            width: "100%",
                            height: "2px",
                            background: `url(${MadeonImg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></div>
                </div>
                <div style={{ flex: "3 0" }}>{children}</div>
            </Flex>
        </div>
    );
};

export default Section;
