import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import './styles/App.css';
import GlobalStyles from './styles/GlobalStyled';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
]);

function App() {
  // LOAD WEBPAGES all the way to the top
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  });

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
