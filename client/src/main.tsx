import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "/dist/output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Repository } from "./pages/Repository.tsx";
import { User } from "./pages/User.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "repo/:owner/:name",
        element: <Repository />,
      },
      {
        path: "/:user",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
