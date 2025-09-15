import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./comps/navbar/navbar.jsx";
import Footer from "./comps/footer/footer.jsx";

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

  return (
    <>
      <Navbar />
      {routes}
      <Footer />
    </>
  );
}

export default App;
