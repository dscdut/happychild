import { useRoutes } from 'react-router-dom';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));
const BlogPage = loadable(import('#/pages/Blog'));
const BlogDetail = loadable(import('#/pages/BlogDetail'));
const Assessment = loadable(import('#/pages/Assessment'));
const AssessmentStart = loadable(import('#/pages/Assessment/Start'));

function PrivateRoute() {
  const routes = useRoutes([
    { path: '/', element: <Index /> },
    {
      path: 'assessment',
      children: [
        { index: true, element: <Assessment /> },
        { path: 'start', element: <AssessmentStart /> },
      ],
    },
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
    { path: '*', element: <p>Not Found</p> },
  ]);

  return routes;
}

export default PrivateRoute;
