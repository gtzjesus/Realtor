import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import './styles/App.css';
import GlobalStyles from './styles/GlobalStyled';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
