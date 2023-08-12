import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import NewProfile from './pages/NewProfile/NewProfile';
import NewProfileCardView from './pages/NewProfileCardView/NewProfileCardView';
import Feed from './pages/Feed/Feed';
import MyPage from './pages/MyPage/MyPage';
import Setting from './pages/Setting/Setting';
import NewQuestion from './pages/NewQuestion/NewQuestion';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import { ThemeProvider } from './styles/theme';
import Toast from './components/Toast/Toast';
import Kakao from './pages/Login/Kakao';
import { AuthGuard } from './pages/Login/AuthGuard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    path: 'feed',
    element: <Feed />,
  },
  {
    path: 'question-detail/:id',
    element: <QuestionDetail />,
  },
  {
    path: 'callback/kakao',
    element: <Kakao />,
  },
  {
    path: '/',
    element: <AuthGuard />,
    children: [
      {
        path: 'new-profile',
        element: <NewProfile />,
      },
      {
        path: 'new-profile-card-view',
        element: <NewProfileCardView />,
      },
      {
        path: 'my-page',
        element: <MyPage />,
      },
      {
        path: 'my-page/setting',
        element: <Setting />,
      },
      {
        path: 'new-question',
        element: <NewQuestion />,
      },
    ],
  },
]);

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  queryClient.setDefaultOptions({
    mutations: {
      retry: false,
      onError: () => {
        //TODO
      },
    },
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: () => {
        //TODO
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toast />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
