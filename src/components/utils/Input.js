import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    // width: 100%;
    padding: var(--space-xs);
    margin-bottom: var(--space-md);
    outline: none;
    border-radius: 4px;
    border: none;
    border: 2px solid var(--color-fg);
    background: var(--color-fg);
    color: var(--color-text);
    font-size: var(--text-base-size);
    opacity: 0.8;
    &:focus {
        opacity: 1;
        border-bottom: 2px solid var(--color-primary);
        border-radius: 4px 4px 0 0;
    }
`;

const Input = ({ type, label, placeholder }) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <StyledInput
                id={label}
                type={type}
                placeholder={placeholder}
                name={label}
            />
        </>
    );
};

export default Input;
