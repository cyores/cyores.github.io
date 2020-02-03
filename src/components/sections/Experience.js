import React from "react";
import JSONData from "../../data/experience.json";
import MadeonImg from "../../images/madeon270.jpg";

// components
import Flex from "../utils/Flex.js";
import JobCard from "../JobCard.js";

const Experience = () => {
    return (
        <>
            <Flex>
                <div
                    style={{ flex: "1 0 370px", padding: "0 var(--space-md)" }}
                >
                    <h4>{JSONData.title}</h4>
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
                <div
                    style={{ flex: "3 0 370px", padding: "0 var(--space-md)" }}
                >
                    <br></br>
                    {JSONData.jobs.map(job => (
                        <JobCard data={job} />
                    ))}
                </div>
            </Flex>
        </>
    );
};

export default Experience;
