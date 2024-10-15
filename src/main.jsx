import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

// Define the accessible routes
const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <ErrorPage />, // Ensure you have this component
  },
  {
    path: '/AboutMe',
    element: <AboutMe />,
  },
  {
    path: '/Portfolio',
    element: <Portfolio />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/Resume',
    element: <Resume />,
  },

]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
