import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';

const ErrorBoundary = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>Nothing to see here, Go back to the previous page</p>
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="*" element={<ErrorBoundary />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
