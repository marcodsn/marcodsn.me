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
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import Link from 'next/link';

const MainHeader = () => (
    <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <Header aria-label="Carbon Home">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
                <Link href="/" passHref legacyBehavior>
                    <HeaderName prefix="">marcodsn</HeaderName>
                </Link>
                {/* <HeaderNavigation aria-label="Carbon Home">
                    <Link href="/posts" passHref legacyBehavior>
                        <HeaderMenuItem>Posts</HeaderMenuItem>
                    </Link>
                    <Link href="/about" passHref legacyBehavior>
                        <HeaderMenuItem>About</HeaderMenuItem>
                    </Link>
                </HeaderNavigation> */}
                {/* <SideNav
                    aria-label="Side navigation"
                    expanded={isSideNavExpanded}
                    isPersistent={true}
                >
                    <HeaderSideNavItems>
                        <Link href="/posts" passHref legacyBehavior>
                            <HeaderMenuItem>Posts</HeaderMenuItem>
                        </Link>
                        <Link href="/about" passHref legacyBehavior>
                            <HeaderMenuItem>About</HeaderMenuItem>
                        </Link>
                    </HeaderSideNavItems> */}
                <SideNav
                    isFixedNav expanded={true}
                    isChildOfHeader={true}
                    aria-label="Side navigation"
                >
                    <SideNavItems>
                        <SideNavLink href="/">
                            Home
                        </SideNavLink>
                        <SideNavLink href="/posts">
                            Posts
                        </SideNavLink>
                        <SideNavMenu title="About">
                            <SideNavMenuItem href="/about">
                                About
                            </SideNavMenuItem>
                            <SideNavMenuItem href="/about/whoami">
                                Who am I
                            </SideNavMenuItem>
                            <SideNavMenuItem href="/about/website">
                                This website
                            </SideNavMenuItem>
                            <SideNavMenuItem href="/about/contacts">
                                Contacts
                            </SideNavMenuItem>
                        </SideNavMenu>
                    </SideNavItems>
                </SideNav>
                {/* <SideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
                    <SideNavItems>
                        <SideNavMenu title="L0 menu">
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavMenu title="L0 menu" isActive={true}>
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem aria-current="page" href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavMenu title="L0 menu">
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                L0 menu item
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavLink href="https://www.carbondesignsystem.com/">
                            L0 link
                        </SideNavLink>
                        <SideNavLink href="https://www.carbondesignsystem.com/">
                            L0 link
                        </SideNavLink>
                    </SideNavItems>
                </SideNav> */}
                <HeaderGlobalBar>
                    {/* <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
                        <Notification size={20} />
                    </HeaderGlobalAction> */}
                    {/* <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
                        <UserAvatar size={20} />
                    </HeaderGlobalAction> */}
                    <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
                        <Switcher size={20} />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        )}
    />
);

export default MainHeader;