import { useRoutes } from 'react-router-dom';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));

function PrivateRoute() {
  const routes = useRoutes([{ path: '/', element: <Index /> }]);

  return <div>{routes}</div>;
}

export default PrivateRoute;
