import { LayoutWrapper } from '@/components/Layout/MainLayoutContainer';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';

const router = createBrowserRouter([{ element: <LayoutWrapper />, children: [{ path: '/', element: <Home /> }] }]);

export default router;
