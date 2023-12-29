'use client';

import React, { useState, useEffect } from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar, Search } from '@carbon/icons-react';
import Link from 'next/link';
import { useActivePath } from '@/app/activePathProvider';

const MainHeader = () => {
    // State to control the SideNav expansion
    const [isSideNavExpanded, setIsSideNavExpanded] = useState(true);
    const { activePath, setActivePath } = useActivePath();

    useEffect(() => {
        // Set the default expanded state based on screen width
        const handleResize = () => {
            setIsSideNavExpanded(window.innerWidth >= 1056);  // 1056px (lg) is the breakpoint for the Header component
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to toggle the SideNav
    const toggleSideNav = () => {
        // if (window.innerWidth <= 1056) {
        //     setIsSideNavExpanded(!isSideNavExpanded);
        // }
        setIsSideNavExpanded(!isSideNavExpanded);
    };

    // Function to close the SideNav
    const closeSideNav = () => {
        if (window.innerWidth <= 1056) {
            setIsSideNavExpanded(false);
        }
    };

    const handleHeaderNameClick = (event) => {
        event.preventDefault();
        setActivePath('/'); // Use setActivePath here
        closeSideNav();
    };

    const RenderLink = ({ href, children }) => {
        // const { activePath, setActivePath } = useActivePath();
        const isActive = href === activePath;
        console.log("RenderLink:", href, activePath, isActive);
    
        const handleClick = () => {
            setActivePath(href); // Update the active path
            closeSideNav(); // Close the SideNav if necessary
        };
    
        return (
            <Link href={href} passHref legacyBehavior>
                <SideNavLink
                    isActive={isActive}
                    onClick={handleClick}
                >
                    {children}
                </SideNavLink>
            </Link>
        );
    };
    console.log("--- ---");

    return (
        <HeaderContainer
            render={() => (
                <Header aria-label="Carbon Header">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={toggleSideNav}
                        isActive={isSideNavExpanded}
                    />
                    <Link href="/" passHref legacyBehavior>
                        <HeaderName onClick={handleHeaderNameClick} prefix="">marcodsn</HeaderName>
                    </Link>
                    <SideNav
                        expanded={isSideNavExpanded}
                        isChildOfHeader={true}
                        aria-label="Side navigation"
                    >
                        <SideNavItems>
                            <RenderLink href="/" onClick={closeSideNav}>
                                Home
                            </RenderLink>
                            <RenderLink href="/posts" onClick={closeSideNav}>
                                Posts
                            </RenderLink>
                            <RenderLink href="/about" onClick={closeSideNav}>
                                About
                            </RenderLink>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="Search">
                            <Search />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
                            <Switcher size={20} />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
            )}
        />
    );
};

export default MainHeader;