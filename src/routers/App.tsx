import { useRoutes } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';
import { loadable } from '#/shared/utils/loadable';
import BlogPage from '#/pages/Blog';
import BlogDetail from '#/pages/BlogDetail';

const Index = loadable(import('#/pages/index'));

function App() {
  const routes = useRoutes([
    {
      path: 'blogs',
      children: [
        {
          index: true,
          element: (
            <GuardRoute>
              <BlogPage />
            </GuardRoute>
          ),
        },
        {
          path: ':id',
          element: (
            <GuardRoute>
              <BlogDetail />
            </GuardRoute>
          ),
        },
      ],
    },
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

  return <PublicLayout>{routes}</PublicLayout>;
}

export default App;
