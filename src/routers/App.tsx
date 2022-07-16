import { useRoutes } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';
import { loadable } from '#/shared/utils/loadable';
import Result from '#/pages/Assessment/Result';

const BlogPage = loadable(import('#/pages/Blog'));
const BlogDetail = loadable(import('#/pages/BlogDetail'));
const Index = loadable(import('#/pages/index'));
const SignInPage = loadable(import('#/pages/SignIn'));
const SignUpPage = loadable(import('#/pages/SignUp'));
const Courses = loadable(import('#/pages/Courses/index'));
const CoursesDetail = loadable(
  import('#/pages/Courses/CoursesDetail/CoursesDetail'),
);

function App() {
  const routes = useRoutes([
    {
      path: 'blogs',
      children: [
        {
          index: true,
          element: <BlogPage />,
        },
        {
          path: ':id',
          element: <BlogDetail />,
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
          element: <CoursesDetail />,
        },
      ],
    },
    {
      path: 'result',
      children: [
        {
          index: true,
          element: <Result />,
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
      path: '/sign-up',
      element: <SignUpPage />,
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
