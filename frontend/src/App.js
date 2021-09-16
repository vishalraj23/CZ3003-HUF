import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import cx from 'classnames';

import './App.css';
import { HeaderBar, SideNav, SiteFooter } from './components';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashBoardPage';
import SettingsPage from './pages/SettingsPage';
import { useAuthStore } from './services/zustand/auth';

const { Content } = Layout;

const App = () => {
  const { signedIn } = useAuthStore();

  const [isMenuClosed, setIsMenuClosed] = React.useState(false);

  if (!signedIn) {
    return (
      <div className='App-guest'>
        <LandingPage />
      </div>
    );
  }
  return (
    <Router>
      <Layout className='App'>
        <SideNav isMenuClosed={isMenuClosed} />
        <Layout className='site-layout'>
          <HeaderBar menuOnClick={() => setIsMenuClosed(!isMenuClosed)} />
          <Content className={cx('site-layout-background', 'content')}>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/dashboard' exact component={DashboardPage} />
              <Route path='/settings' exact component={SettingsPage} />
            </Switch>
          </Content>
          <SiteFooter />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
