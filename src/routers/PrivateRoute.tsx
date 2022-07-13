import { useRoutes } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));

function PrivateRoute() {
  const routes = useRoutes([{ path: '/', element: <Index /> }]);

  return <PublicLayout>{routes}</PublicLayout>;
}

export default PrivateRoute;
