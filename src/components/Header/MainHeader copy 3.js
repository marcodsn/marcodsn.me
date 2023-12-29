'use client';

import React, { useState, useEffect } from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderMenuButton,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderNavigation,
    HeaderMenuItem,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavLink,
    HeaderSideNavItems,
} from '@carbon/react';
import { Search, Switcher } from '@carbon/icons-react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const MainHeader = () => {
    const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

    // const router = useRouter();
    const pathname = usePathname();
    // const searchParams = useSearchParams();

    // useEffect(() => {
    //     const sideNav = document.querySelector('.side-nav');
    //     const menuButton = document.querySelector('.menu-button');

    //     sideNav.setAttribute('display', 'initial')
    //     menuButton.setAttribute('display', 'initial')

    //     // Set the default expanded state based on screen width
    //     const handleResize = () => {
    //         // setIsSideNavExpanded(window.innerWidth >= 1056);
    //         if (window.innerWidth >= 1056) {
    //             setIsSideNavExpanded(true);
    //         } else {
    //             setIsSideNavExpanded(false);
    //         }
    //     };

    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // Function to toggle the SideNav
    const toggleSideNav = () => {
        setIsSideNavExpanded(!isSideNavExpanded);
    };

    // Function to close the SideNav
    const closeSideNav = () => {
        // if (window.innerWidth <= 1056) {
        //     setIsSideNavExpanded(false);
        // }
        setIsSideNavExpanded(false);
        // isSideNavExpanded = false;
    };

    const RenderLink = ({ href, children }) => {
        const isActive = href === pathname;

        return (
            <Link href={href} passHref legacyBehavior>
                <HeaderMenuItem
                    isActive={isActive}
                    // onClick={closeSideNav}
                >
                    {children}
                </HeaderMenuItem>
            </Link>
        );
    };

    const RenderNavLink = ({ href, children }) => {
        const isActive = href === pathname;

        return (
            <Link href={href} passHref legacyBehavior>
                <HeaderMenuItem
                    isActive={isActive}
                    // onClick={closeSideNav}
                >
                    {children}
                </HeaderMenuItem>
            </Link>
        );
    };

    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="Carbon Header">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        // onClick={toggleSideNav}
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                        className='menu-button'
                    />
                    <Link href="/" passHref legacyBehavior>
                        <HeaderName prefix="" onClick={onClickSideNavExpand}>marcodsn</HeaderName>
                    </Link>
                    <HeaderNavigation
                        aria-label="Carbon Tutorial"
                        className='header-nav'
                    >
                        <RenderNavLink href="/posts">Posts</RenderNavLink>
                        <RenderNavLink href="/about">About</RenderNavLink>
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        className='side-nav'
                        isChildOfHeader={true}
                        expanded={isSideNavExpanded}
                        isPersistent={false}
                    >
                        <SideNavItems>
                            <HeaderSideNavItems>
                                <RenderLink href="/posts">Posts</RenderLink>
                                <RenderLink href="/about">About</RenderLink>
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="Search"><Search /></HeaderGlobalAction>
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
