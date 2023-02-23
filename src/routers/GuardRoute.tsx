import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '#/shared/utils/loadable';
import { auth } from '#/shared/utils/firebase';

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
      const user = await auth?.currentUser;
      if (!user && isPrivate) {
        navigate('/sign-in', {
          replace: true,
        });
      }
      if (user && !isPrivate) {
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
