import { useRoutes } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';
import Courses from '#/pages/Courses/index';
import { loadable } from '#/shared/utils/loadable';

const BlogPage = loadable(import('#/pages/Blog'));
const BlogDetail = loadable(import('#/pages/BlogDetail'));
const Index = loadable(import('#/pages/index'));
const SignInPage = loadable(import('#/pages/SignIn'));

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
      path: 'courses',
      children: [
        {
          index: true,
          element: <Courses />,
        },
        {
          path: ':id',
          element: (
            <GuardRoute>
              <p>Hello</p>
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
