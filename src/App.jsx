import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./comps/navbar/navbar.jsx";
import Footer from "./comps/footer/footer.jsx";
import BlogPage from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import FAQ from "./pages/FAQ.jsx";
import Backoffice from "./pages/Backoffice.jsx";

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
      element: <BlogPage />,
      path: "/blog",
    },
    {
      element: <BlogPost />,
      path: "/blog/:id",
    },
    {
      element: <Backoffice />,
      path: "/backoffice",
    },
    {
      element: <Contact />,
      path: "/contact",
    },
    {
      element: <FAQ />,
      path: "/faq",
    },
    {
      path: "*",
      element: <NotFound />,
      status: 404,
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
