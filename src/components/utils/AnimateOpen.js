import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    max-height: 500px;
    opacity: 1;
    @keyframes AnimateOpen {
        0% {
            max-height: 0;
            opacity: 0;
        }
        100% {
            max-height: 500px;
            opacity: 1;
        }
    }

    animation-name: AnimateOpen;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
`;

const AnimateOpen = ({ children }) => <Wrapper>{children}</Wrapper>;

export default AnimateOpen;
