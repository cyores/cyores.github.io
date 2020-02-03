import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block;
    border-radius: 2rem;
    padding: 0 var(--space-md);
    margin: var(--space-xs);
    width: fit-content;
    background: var(--color-primary);
    box-shadow: 0 2px 8px 0 var(--color-primary);
`;

const Chip = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Chip;