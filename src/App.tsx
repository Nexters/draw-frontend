import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
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
import { QueryClientProvider } from './QueryClientProvider';

const router = createBrowserRouter([
  {
    path: '',
    element: (
      <QueryClientProvider>
        <Outlet />
      </QueryClientProvider>
    ),
    children: [
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
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toast />
    </ThemeProvider>
  );
};

export default App;
