import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
    cursor: pointer;
    color: var(--color-primary);
    font-size: var(--text-base-size);
    border-radius: 4px;
    padding: var(--space-xs) var(--space-md);
    margin: var(--space-md) 0;
    outline: none;
    background: transparent;
    border: none;
    border: 2px solid var(--color-primary);
    color: var(--color-text);
    transition: all 0.15s ease;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        // box-shadow: 0 2px 16px 0 var(--color-primary);
    }
    &:active {
        opacity: 0.8;
    }
`;

const Button = ({ children, type = "button", onClick }) => (
    <Wrapper onClick={onClick} type={type}>
        {children}
    </Wrapper>
);

export default Button;
