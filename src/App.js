import logo from './logo.svg';
import './App.css';
import { router } from './Routes/Route';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
