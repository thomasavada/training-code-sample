import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {CalloutCard, Page, LegacyCard, Layout, FormLayout} from "@shopify/polaris";
import DesktopPositionInput from "../../components/DesktopPositionInput/DesktopPositionInput";

const Home = props => {
    const [position, setPosition] = useState('top-left')
    return (
        <Page title={'Home'}>
            <Layout>
                <Layout.Section>
                    <CalloutCard
                        title="Welcome to AVADA Development"
                        illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                        primaryAction={{
                            content: 'Go to Todoes',
                            url: '/todoes',
                        }}
                    >
                        <p>Upload your store’s logo, change colors and fonts, and more.</p>
                    </CalloutCard>
                </Layout.Section>
                <Layout.Section>
                    <LegacyCard>
                        <LegacyCard.Section>
                            <FormLayout>
                                <DesktopPositionInput
                                    label="Desktop Position"
                                    onChange={(val) => setPosition(val)}
                                    value={position}
                                />
                            </FormLayout>
                        </LegacyCard.Section>
                    </LegacyCard>
                </Layout.Section>
            </Layout>
        </Page>
    );
};

Home.propTypes = {};

export default Home;
