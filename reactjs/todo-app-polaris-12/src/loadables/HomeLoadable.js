import loadable from "react-loadable";
import {LegacyCard, Layout, Page, SkeletonBodyText} from "@shopify/polaris";
import React from "react";

const Loading = () => (
  <Page>
    <Layout>
      <Layout.Section>
        <LegacyCard>
          <LegacyCard.Section>
            <SkeletonBodyText lines={5} />
          </LegacyCard.Section>
        </LegacyCard>
        <LegacyCard>
          <LegacyCard.Section>
            <SkeletonBodyText lines={5} />
          </LegacyCard.Section>
        </LegacyCard>
      </Layout.Section>
    </Layout>
  </Page>
);

export default loadable({
  loader: () => import("../pages/Home/Home"),
  loading: Loading
});
