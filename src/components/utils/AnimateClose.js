import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 0;
    opacity: 0;
    @keyframes AnimateClose {
        0% {
            height: ${props => (props.height ? props.height : "150px")};
            opacity: 1;
        }
        100% {
            height: 0;
            opacity: 0;
        }
    }

    animation-name: AnimateClose;
    animation-duration: 250ms;
    animation-timing-function: ease-in-out;
`;

const AnimateClose = ({ children, height }) => (
    <Wrapper height={height}>{children}</Wrapper>
);

export default AnimateClose;
