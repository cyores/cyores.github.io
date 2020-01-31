import React from "react";
import styled from "styled-components";

// components
import Flex from "./utils/Flex";

const NavItem = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: var(--text-md);
    line-height: 0.9;
    opacity: 0.8;
    border-bottom: 2px solid transparent;
    transition: all 0.15s ease-in-out;
    &:hover {
        opacity: 1;
        transform: translate3d(0, -1px, 0);
        border-bottom: 2px solid var(--color-primary);
    }
`;

const Spacer = styled.div`
    display: inline-block;
    padding: var(--space-md);
    color: var(--color-complement);
`;

const Header = () => (
    <>
        <Flex>
            <div>
                <NavItem>home</NavItem>
                <Spacer>/</Spacer>
                <NavItem>education</NavItem>
                <Spacer>/</Spacer>
                <NavItem>experience</NavItem>
                <Spacer>/</Spacer>
                <NavItem>projects</NavItem>
                <Spacer>/</Spacer>
                <NavItem>contact</NavItem>
            </div>
        </Flex>
    </>
);

export default Header;
