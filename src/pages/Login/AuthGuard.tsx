import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthGuard = () => {
  const aT = localStorage.getItem('aT');
  const { pathname } = useLocation();
  if (aT) {
    if (pathname === '/') return <Navigate to={'/feed'} />;
    return <Outlet />;
  } else {
    return <Navigate to={'/login'} />;
  }
};
