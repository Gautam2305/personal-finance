import { RouterProvider } from 'react-router';
import './App.css';
import { RouterPath } from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <RouterProvider router={RouterPath}/>
    <ToastContainer />
    </>
  );
}

export default App;
