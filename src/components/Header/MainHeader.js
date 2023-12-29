'use client';

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
    HeaderSideNavItems,
} from '@carbon/react';
import { Search, Switcher } from '@carbon/icons-react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react';

const MainHeader = () => {
    // Manage focus when sidenav is open
    const pathname = usePathname();

    const closeSideNav = ({ isSideNavExpanded, onClickSideNavExpand }) => {
        if (isSideNavExpanded) {
            onClickSideNavExpand();
        }
    }

    const RenderLink = ({ href, children, onClickSideNavExpand }) => {
        const isActive = href === pathname;

        const toggleSideNav = () => {
            onClickSideNavExpand();
        }

        return (
            <Link href={href} passHref legacyBehavior>
                <HeaderMenuItem
                    isActive={isActive}
                    onClick={toggleSideNav}
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
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                        className='menu-button'
                    />
                    <Link href="/" passHref legacyBehavior>
                        <HeaderName
                            className='brand-name'
                            prefix=""
                            onClick={() => closeSideNav({ isSideNavExpanded, onClickSideNavExpand})}
                        >
                            marcodsn
                        </HeaderName>
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
                                <RenderLink href="/posts" onClickSideNavExpand={onClickSideNavExpand}>Posts</RenderLink>
                                <RenderLink href="/about" onClickSideNavExpand={onClickSideNavExpand}>About</RenderLink>
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
