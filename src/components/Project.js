import React from "react";
import sampleImg from "../images/opensurvey-screen.jpg";

// components
import Chip from "./utils/Chip";
import Button from "./utils/Button";
import Flex from "./utils/Flex";

const Project = ({
    title,
    description,
    technologies,
    liveLink,
    githubLink
}) => (
    <Flex>
        <div
            style={{
                flex: "1 0 350px",
                margin: "var(--space-md) var(--space-xl)"
            }}
        >
            <img
                src={sampleImg}
                alt="project screenshot"
                style={{ width: "100%", borderRadius: "4px" }}
            />
        </div>
        <div style={{ flex: "4 0" }}>
            <h5 style={{ marginTop: "var(--space-sm)" }}>
                <b>{title}</b>
            </h5>
            <p>{description}</p>
            {technologies.map((tech, i) => (
                <Chip key={`projectchips-${title}-${tech}-${i}`}>{tech}</Chip>
            ))}
            <br></br>
            {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <Button>View Live Site</Button>
                </a>
            )}
            {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <Button>View on GitHub</Button>
                </a>
            )}
        </div>
    </Flex>
);

export default Project;
