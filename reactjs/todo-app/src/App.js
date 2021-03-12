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
      theme={{
        colors: {
          surface: '#111213',
          onSurface: '#111213',
          interactive: '#1983ff',
          secondary: '#111213',
          primary: '#1983ff',
          critical: '#d82c0d',
          warning: '#ffc453',
          highlight: '#5bcdda',
          success: '#008060',
          decorative: '#ffc96b',
        },
        logo: {
          width: 105,
          topBarSource: 'https://cdn1.avada.io/logo/avada_logo_final_color.png',
          url: '/',
          accessibilityLabel: 'AVADA',
        }
      }}
      linkComponent={Link}
      features={{newDesignLanguage: true}}
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
