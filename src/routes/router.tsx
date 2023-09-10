import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import SettingsPage from '../pages/Settings';

const routes: RouteObject[] = [
  { path: '/', element: <div>Main</div> },
  { path: '/settings', element: <SettingsPage /> },
];

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
