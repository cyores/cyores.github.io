import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: ${props => (props.height ? props.height : "150px")};
    opacity: 1;
    @keyframes AnimateOpen {
        0% {
            height: 0;
            opacity: 0;
        }
        100% {
            height: ${props => (props.height ? props.height : "150px")};
            opacity: 1;
        }
    }

    animation-name: AnimateOpen;
    animation-duration: 250ms;
    animation-timing-function: ease-in-out;
`;

const AnimateOpen = ({ children, height }) => (
    <Wrapper height={height}>{children}</Wrapper>
);

export default AnimateOpen;
