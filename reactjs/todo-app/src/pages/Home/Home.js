import React from 'react';
import PropTypes from 'prop-types';
import {CalloutCard, Page} from "@shopify/polaris";

const Home = props => {
  return (
    <Page title={'Home'}>
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
    </Page>
  );
};

Home.propTypes = {

};

export default Home;
