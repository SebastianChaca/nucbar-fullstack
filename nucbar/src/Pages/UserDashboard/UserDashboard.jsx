import {
  Switch,
  Route,
  useRouteMatch,
  BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';
import DashSidebar from '../../Components/DashSidebar/DashSidebar';
import { Box } from '@chakra-ui/react';

const UserDashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/configuration`}>
          <Box ml="500px">ola</Box>
        </Route>
      </Switch>
      <DashSidebar url={url} />
    </Router>
  );
};

export default UserDashboard;
