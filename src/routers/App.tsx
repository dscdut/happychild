import { useRoutes } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/*',
      element: (
        <GuardRoute isPrivate>
          <PrivateRoute />
        </GuardRoute>
      ),
    },
  ]);

  return routes;
};

export default App;
