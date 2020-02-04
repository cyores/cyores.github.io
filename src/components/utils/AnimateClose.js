import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    max-height: 0;
    pointer-events: none;
    opacity: 0;
    @keyframes AnimateClose {
        0% {
            max-height: 500px;
            opacity: 1;
        }
        100% {
            max-height: 0;
            opacity: 0;
        }
    }

    animation-name: AnimateClose;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
`;

const AnimateClose = ({ children }) => <Wrapper>{children}</Wrapper>;

export default AnimateClose;
