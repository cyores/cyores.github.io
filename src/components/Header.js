import React, { useState } from "react";
import styled from "styled-components";
import MadeonImg from "../images/madeon270.jpg";

// components
import Flex from "./utils/Flex";

const Wrapper = styled.div`
    background: url(${MadeonImg});
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: var(--space-lg);
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

const SlideOpen = styled.div`
    @keyframes slideOpen {
        0% {
            height: 0;
            opacity: 0;
        }
        100% {
            height: 160px;
            opacity: 1;
        }
    }

    animation-name: slideOpen;
    animation-duration: 250ms;
    animation-timing-function: ease-in-out;
`;

const SlideClosed = styled.div`
    height: 0;
    opacity: 0;
    pointer-events: none;
    @keyframes slideClosed {
        0% {
            height: 160px;
            opacity: 1;
            display: block;
        }
        100% {
            height: 0;
            opacity: 0;
            display: none;
        }
    }

    animation-name: slideClosed;
    animation-duration: 250ms;
    animation-timing-function: ease-in-out;
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
);

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <Wrapper>
            <MenuButton
                onClick={() => {
                    const currOpen = open;
                    setOpen(!currOpen);
                }}
            >
                {open ? <span>close</span> : <span>menu</span>}
            </MenuButton>

            {open ? (
                <SlideOpen>
                    <PhoneLayout open={open}>
                        <MenuOptions />
                    </PhoneLayout>
                </SlideOpen>
            ) : (
                <SlideClosed>
                    <PhoneLayout open={open}>
                        <MenuOptions />
                    </PhoneLayout>
                </SlideClosed>
            )}

            <DesktopLayout>
                <MenuOptions />
            </DesktopLayout>
        </Wrapper>
    );
};

export default Header;
