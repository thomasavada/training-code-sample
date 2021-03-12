import React, {useCallback, useState} from 'react';
import {ActionList, Frame, Navigation, TopBar} from "@shopify/polaris";
import {ArrowLeftMinor, ChecklistMajor, HomeMajor} from "@shopify/polaris-icons";
import {useHistory, useLocation} from 'react-router-dom';

const AppLayout = ({children}) => {
  const history = useHistory();
  const location = useLocation();
  const pathname = history?.location?.pathname || location.pathname;
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[]}
      name="Dharma"
      detail={"Avada"}
      initials="A"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: 'Back to Shopify',
            icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Jaded Pixel App"
        items={[
          {
            label: 'Dashboard',
            icon: HomeMajor,
            url: '/',
            onClick: () => history.push('/'),
            selected: pathname === '/'
          },
          {
            label: 'Todoes',
            icon: ChecklistMajor,
            url: '/todoes',
            onClick: () => history.push('/todoes'),
            selected: pathname === '/todoes'
          }
        ]}
      />
    </Navigation>
  );
  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      {children}
    </Frame>
  );
};

AppLayout.propTypes = {

};

export default AppLayout;
