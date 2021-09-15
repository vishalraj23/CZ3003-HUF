import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashBoardPage';
import SettingsPage from './pages/SettingsPage';
import { NavBar } from './components';
import { useAuthStore } from './services/zustand/auth';

const App = () => {
  const { signedIn } = useAuthStore();
  if (!signedIn) {
    return (
      <div className='App-guest'>
        <LandingPage />
      </div>
    );
  }
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/dashboard' exact component={DashboardPage} />
          <Route path='/settings' exact component={SettingsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
