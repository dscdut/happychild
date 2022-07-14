import { useRoutes } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));
const BlogPage = loadable(import('#/pages/Blog'));
const BlogDetail = loadable(import('#/pages/BlogDetail'));

function PrivateRoute() {
  const routes = useRoutes([
    { path: '/', element: <Index /> },
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
    { path: '*', element: <p>Not Found</p> },
  ]);

  return routes;
}

export default PrivateRoute;
