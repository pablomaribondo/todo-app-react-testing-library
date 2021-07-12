import { FC } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Banner from './components/Banner/Banner';
import TodoPage from './pages/Todo';
import FollowersPage from './pages/Followers';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <Banner />
      <Router>
        <Switch>
          <Route strict exact path="/" component={TodoPage} />
          <Route strict exact path="/followers" component={FollowersPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
