import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
    cursor: pointer;
    color: var(--color-primary);
    font-size: var(--text-base-size);
    border-radius: 4px;
    padding: var(--space-sm) var(--space-md);
    margin: var(--space-sm) 0;
    outline: none;
    background: transparent;
    border: none;
    transition: all 0.15s ease;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        // box-shadow: 0 2px 16px 0 var(--color-primary);
    }
`;

const Button = ({ children, onClick }) => (
    <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default Button;
