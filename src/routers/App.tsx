import { useRoutes } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));
const SignInPage = loadable(import('#/pages/SignIn'));

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/sign-in',
      element: <SignInPage />,
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

  return <PublicLayout>{routes}</PublicLayout>;
}

export default App;
