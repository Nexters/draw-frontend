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
import { QueryClientProvider } from './QueryClientProvider';
import Apple from './pages/Login/Apple';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/callback/kakao',
    element: <Kakao />,
  },
  {
    path: '/callback/apple',
    element: <Apple />,
  },
  {
    path: '/new-profile',
    element: <NewProfile />,
  },
  {
    path: '/new-profile-card-view',
    element: <NewProfileCardView />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/my-page',
    element: <MyPage />,
  },
  {
    path: '/my-page/setting',
    element: <Setting />,
  },
  {
    path: '/new-question',
    element: <NewQuestion />,
  },
  {
    path: '/question-detail/:id',
    element: <QuestionDetail />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toast />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
