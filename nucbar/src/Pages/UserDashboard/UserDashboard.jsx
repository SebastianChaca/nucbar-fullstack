import {
  Switch,
  Route,
  useRouteMatch,
  BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';
import DashSidebar from '../../Components/DashSidebar/DashSidebar';
import { Box } from '@chakra-ui/layout';

const UserDashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <DashSidebar url={url}>
        <Switch>
          <Route path={`${path}/configuration`}>
            <Box ml="500px">Ola</Box>
          </Route>
        </Switch>
      </DashSidebar>
    </Router>
  );
};

export default UserDashboard;
