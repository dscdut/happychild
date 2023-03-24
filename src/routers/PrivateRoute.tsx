import { useParams, useRoutes } from 'react-router-dom';
import { loadable } from '#/shared/utils/loadable';
import TrackingProgress from '#/pages/TrackingProgress';
import InterventionGuide from '#/pages/InterventionGuide';
import InterventionGuideRoute from '#/pages/InterventionGuide/IntervetionGuideRoute';

const Index = loadable(import('#/pages/index'));
const BlogPage = loadable(import('#/pages/Blog'));
const BlogDetail = loadable(import('#/pages/BlogDetail'));
const Assessment = loadable(import('#/pages/Assessment'));
const AssessmentStart = loadable(import('#/pages/Assessment/Start'));
const Result = loadable(import('#/pages/Assessment/Result'));
const Courses = loadable(import('#/pages/Courses'));
const CoursesDetail = loadable(
  import('#/pages/Courses/CoursesDetail/CoursesDetail'),
);
const AssessmentForm = loadable(import('#/pages/Assessment/Form'));
const ComingSoon = loadable(import('#/pages/ComingSoon'));

function PrivateRoute() {
  const routes = useRoutes([
    { path: '/', element: <Index /> },
    {
      path: 'assessment',
      children: [
        { index: true, element: <Assessment /> },
        {
          path: 'form',
          element: <AssessmentForm />,
        },
        { path: 'start/:childId', element: <AssessmentStart /> },
        { path: 'results/:childId', element: <Result /> },
      ],
    },
    {
      path: 'tracking-progress',
      children: [
        {
          index: true,
          element: <TrackingProgress />,
        },
      ],
    },
    {
      path: 'intervention-guide',
      children: [
        { index: true, element: <InterventionGuide id="" childId="" /> },
        { path: ':childId', element: <InterventionGuideRoute /> },
      ],
    },
    // {
    //   path: 'blogs',
    //   children: [
    //     {
    //       index: true,
    //       element: <BlogPage />,
    //     },
    //     {
    //       path: ':id',
    //       element: <BlogDetail />,
    //     },
    //   ],
    // },
    // {
    //   path: 'courses',
    //   children: [
    //     {
    //       index: true,
    //       element: <Courses />,
    //     },
    //     {
    //       path: ':id',
    //       element: <CoursesDetail />,
    //     },
    //   ],
    // },
    { path: '*', element: <ComingSoon /> },
  ]);

  return routes;
}

export default PrivateRoute;
