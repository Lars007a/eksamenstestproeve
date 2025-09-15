import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const routes = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Home />,
      path: "/home",
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <>{routes}</>;
}

export default App;
