import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { LayoutProvider } from './Providers/LayoutContext';

function App() {
  return (
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  );
}

export default App;
