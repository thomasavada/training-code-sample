import React from 'react';
import en from '@shopify/polaris/locales/en.json';
import {AppProvider} from "@shopify/polaris";
import {BrowserRouter} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Routes from "./routes/routes";
import AppLayout from "./layout/AppLayout";
import Link from "./components/Link";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const history = createBrowserHistory();

const App = props => {
  return (
      <AppProvider
          i18n={en}
          linkComponent={Link}
      >
        <BrowserRouter history={history}>
          <AppLayout>
            <ErrorBoundary>
              <Routes/>
            </ErrorBoundary>
          </AppLayout>
        </BrowserRouter>
      </AppProvider>
  );
};

App.propTypes = {};

export default App;
