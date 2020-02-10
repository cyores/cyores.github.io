import React from "react";
import styled from "styled-components";

// components
import Chip from "./utils/Chip";
import Button from "./utils/Button";
import Flex from "./utils/Flex";

const ImgWrapper = styled.div`
    flex: 1 0 350px;
    margin: var(--space-md) var(--space-xl);
    order: ${props => props.order};
    @media only screen and (max-width: 625px) {
        order: 0;
    }
`;

const Project = ({
    title,
    description,
    technologies,
    liveLink,
    githubLink,
    order,
    img
}) => (
    <Flex>
        <ImgWrapper order={order}>
            <img
                src={img.image}
                alt="project screenshot"
                style={{ width: "100%", borderRadius: "4px" }}
            />
        </ImgWrapper>
        <div style={{ flex: "3 0", textAlign: "center" }}>
            <h5 style={{ marginTop: "var(--space-md)" }}>
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
                <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{margin: "0 var(--space-sm)"}}>
                    <Button>View on GitHub</Button>
                </a>
            )}
        </div>
    </Flex>
);

export default Project;
