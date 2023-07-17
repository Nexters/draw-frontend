import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import NewProfile from './pages/NewProfile/NewProfile';
import NewProfileCardView from './pages/NewProfileCardView/NewProfileCardView';
import Feed from './pages/Feed/Feed';
import MyPage from './pages/MyPage/MyPage';
import NewQuestion from './pages/NewQuestion/NewQuestion';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import { ThemeProvider } from './styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
