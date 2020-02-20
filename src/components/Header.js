import React, { useState } from "react";
import styled from "styled-components";
import MadeonImg from "../images/madeonBG.jpg";

// components
import Flex from "./utils/Flex";
import AnimateOpen from "./utils/AnimateOpen";
import AnimateClose from "./utils/AnimateClose";

const Wrapper = styled.div`
    background: url(${MadeonImg});
    background-size: cover;
    background-repeat: no-repeat;
`;

const DesktopLayout = styled.div`
    display: block;
    background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.33) 0%,
        rgba(255, 255, 255, 0) 80%
    );
    @media only screen and (max-width: 625px) {
        display: none;
    }
`;

const PhoneLayout = styled.div`
    display: none;

    @media only screen and (max-width: 625px) {
        display: block;
    }
`;

const MenuButton = styled.span`
    display: none;
    font-size: var(--text-base-size);
    color: var(--color-bg);
    padding: var(--space-sm) var(--space-xxs);

    @media only screen and (max-width: 625px) {
        display: block;
    }
`;

const NavItem = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: var(--text-md);
    color: var(--color-bg);
    line-height: 0.9;
    opacity: 0.8;
    border-bottom: 3px solid transparent;
    transition: all 0.15s ease-in-out;
    &:hover {
        opacity: 1;
        transform: translate3d(0, -1px, 0);
        border-bottom: 3px solid var(--color-primary);
    }

    @media only screen and (max-width: 625px) {
        display: block;
        text-align: center;
        margin: var(--space-xs) 0;
    }
`;

const Spacer = styled.div`
    display: inline-block;
    padding: var(--space-md);
    color: var(--color-primary);
    font-size: var(--text-md);

    @media only screen and (max-width: 625px) {
        display: none;
    }
`;

const MenuOptions = () => (
    <Flex>
        <nav>
            <a href="#projects" style={{ textDecoration: "none" }}>
                <NavItem>projects</NavItem>
            </a>
            <Spacer>/</Spacer>
            <a href="#experience" style={{ textDecoration: "none" }}>
                <NavItem>experience</NavItem>
            </a>
            <Spacer>/</Spacer>
            <a href="#education" style={{ textDecoration: "none" }}>
                <NavItem>education</NavItem>
            </a>
            <Spacer>/</Spacer>
            <a href="#contact" style={{ textDecoration: "none" }}>
                <NavItem>contact</NavItem>
            </a>
        </nav>
    </Flex>
);

const Header = () => {
    const [open, setOpen] = useState(false);
    const [wasItOpen, setWasItOpen] = useState(false);
    return (
        <Wrapper>
            <MenuButton
                onClick={() => {
                    const currOpen = open;
                    setOpen(!currOpen);
                    setWasItOpen(true);
                }}
            >
                {open ? <span>close</span> : <span>menu</span>}
            </MenuButton>

            <PhoneLayout>
                {wasItOpen ? (
                    <>
                        {open ? (
                            <AnimateOpen>
                                <MenuOptions />
                            </AnimateOpen>
                        ) : (
                            <AnimateClose>
                                <MenuOptions />
                            </AnimateClose>
                        )}
                    </>
                ) : null}
            </PhoneLayout>

            <DesktopLayout>
                <MenuOptions />
            </DesktopLayout>
        </Wrapper>
    );
};

export default Header;
