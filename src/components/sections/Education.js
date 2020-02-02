import React from "react";
import JSONData from "../../data/education.json";

// components
import Flex from "../utils/Flex.js";

const Education = () => {
    return (
        <>
            <Flex>
                <div style={{ flex: "10 500px" }}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "250px",
                            background: "var(--color-fg)",
                            clipPath: "polygon(0 0, 100% 0, 59% 100%, 0 100%)",
                            padding: "var(--space-md)"
                        }}
                    >
                        <h4 style={{ marginTop: "var(--space-sm)" }}>
                            {JSONData.title}
                        </h4>
                    </div>
                </div>
                <div style={{ flex: "10 500px" }}>
                    {JSONData.schools.map(school => (
                        <>
                            <h5>{school.name}</h5>
                            <h6>
                                {school.degree}, &nbsp; {school.graduationDate}
                            </h6>

                            <p>{school.description}</p>
                            <p>
                                <small>{school.extra}</small>
                            </p>
                        </>
                    ))}
                </div>
            </Flex>
        </>
    );
};

export default Education;
