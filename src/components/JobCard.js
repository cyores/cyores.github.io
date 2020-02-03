import React, { useState } from "react";
import styled from "styled-components";

// components
import Chip from "./utils/Chip";
import Button from "./utils/Button";
import AnimateOpen from "./utils/AnimateOpen";
import AnimateClose from "./utils/AnimateClose";

const Wrapper = styled.div`
    transition: all 0.15s ease;
`;

const JobCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [wasItOpen, setWasItOpen] = useState(false);
    return (
        <Wrapper>
            <h5>
                <b>{data.title}</b> @ {data.company}
            </h5>

            <p>
                {data.startDate} - {data.endDate}
            </p>

            <ul>
                {data.points.map(point => (
                    <li>{point}</li>
                ))}
            </ul>
            {data.technologies.map(tech => (
                <Chip>{tech}</Chip>
            ))}

            <br></br>

            <Button
                onClick={() => {
                    const curr = open;
                    setOpen(!curr);
                    setWasItOpen(true);
                }}
            >
                {open ? <span>See Less</span> : <span>See More</span>}
            </Button>
            {wasItOpen ? (
                <>
                    {open ? (
                        <AnimateOpen>{data.description}</AnimateOpen>
                    ) : (
                        <AnimateClose>{data.description}</AnimateClose>
                    )}
                </>
            ) : null}
        </Wrapper>
    );
};

export default JobCard;
