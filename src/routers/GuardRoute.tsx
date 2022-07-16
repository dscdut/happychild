import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '#/shared/utils/loadable';

interface Props {
  isPrivate?: boolean;
  children: JSX.Element;
}

function GuardRoute({ isPrivate = false, children }: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const accessToken = localStorage?.getItem('unihack-access-token');
      if (!accessToken && isPrivate) {
        navigate('/login', {
          replace: true,
        });
      }
      if (accessToken && !isPrivate) {
        navigate('/', {
          replace: true,
        });
      }
      setLoading(false);
    })();
  }, [navigate, isPrivate]);

  if (loading) return <Loading />;
  return children;
}

export default GuardRoute;
