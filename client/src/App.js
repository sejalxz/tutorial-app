import './index.css'
import Tutorials from "./components/Tutorials"
import AddTutorial from "./components/AddTutorial";
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from './components/Home';
import ViewTutorial from './components/ViewTutorial';
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/tutorials",
          element: <Tutorials />
        },
        {
          path: '/post',
          element: <AddTutorial />
        },
        {
          path: '/tutorials/:id',
          element: <ViewTutorial />
        }
      ]
    },
  ]);

  return (
      <RouterProvider router={router}/>
  );
}

export default App;
