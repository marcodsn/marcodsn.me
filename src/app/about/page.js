'use client';
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Grid,
    Column,
} from '@carbon/react';
import { Theme } from '@carbon/react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <Grid className="landing-page" fullWidth>
            <Column lg={16} md={8} sm={4} className="landing-page__banner">
                <Theme theme="g100">
                    <Breadcrumb aria-label="Page navigation" className="landing-page__breadcrumb">
                        <BreadcrumbItem>
                            <a href="/">Home</a>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Theme>
                <h1 className="landing-page__heading">About</h1>
            </Column>
            <Column lg={16} md={8} sm={4} className="landing-page__r2">
                <Tabs defaultSelectedIndex={0}>
                    <Theme theme="g100">
                        <TabList className="tabs-group" aria-label="Tab navigation" contained>
                            <Tab>Who am I</Tab>
                            <Tab>This website</Tab>
                            <Tab>Contacts</Tab>
                        </TabList>
                    </Theme>
                    <TabPanels>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                                    <h2 className="landing-page__subheading">What is Carbon?</h2>
                                    <p className="landing-page__p">
                                        Carbon is IBM’s open-source design system for digital products and
                                        experiences. With the IBM Design Language as its foundation, the
                                        system consists of working code, design tools and resources, human
                                        interface guidelines, and a vibrant community of contributors.
                                    </p>
                                    <Button>Learn more</Button>
                                </Column>
                                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                                    <Image
                                        className="landing-page__illo"
                                        src="/tab-illo.png"
                                        alt="Carbon illustration"
                                        width={786}
                                        height={647}
                                    />
                                </Column>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
                                    Rapidly build beautiful and accessible experiences. The Carbon kit
                                    contains all resources you need to get started.
                                </Column>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
                                    Carbon provides styles and components in Vanilla, React, Angular,
                                    and Vue for anyone building on the web.
                                </Column>
                            </Grid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Column>
            <Column lg={16} md={8} sm={4} className="landing-page__r3">
                <Grid>
                    <Column md={4} lg={4} sm={4}>
                        <h3 className="landing-page__label">The Principles</h3>
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        Carbon is Open
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        Carbon is Modular
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        Carbon is Consistent
                    </Column>
                </Grid>
            </Column>
        </Grid>
    );
}