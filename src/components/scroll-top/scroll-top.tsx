import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function ScrollTop(): null {
  const {pathname} = useLocation();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      window.scrollTo(0, 0);
    }

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  return null;
}
