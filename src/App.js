import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./miniproject/Root";
import Home from "./miniproject/Home/Home";
import Error from "./miniproject/Error";
import Product from "./miniproject/Product/Product";
import Beauty from "./miniproject/Beauty";
import Men from "./miniproject/Men/Men";
import Women from "./miniproject/Women/Women";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Home />,
          children: [
            {
              path: "men",
              element: <Men />,
            },
            {
              path: "Women",
              element: <Women />,
            },

            {
              path: "Beauty",
              element: <Beauty />,
            },
          ],
        },
        {
          path: "product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <div className="App bg-light ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
