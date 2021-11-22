import {
  Switch,
  Route,
  useRouteMatch,
  BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';
import DashSidebar from '../../Components/DashSidebar/DashSidebar';

import UserData from '../../Components/UserData/UserData';

const UserDashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/configuration`}>
          <UserData />
        </Route>
      </Switch>
      <DashSidebar url={url} />
    </Router>
  );
};

export default UserDashboard;
