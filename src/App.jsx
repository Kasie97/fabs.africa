import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import EpenaLaw from "./pages/EpenaLaw";
import GenericPage from "./pages/GenericPage";
import BlogListing from "./pages/BlogListing";
import BlogPost from "./pages/BlogPost";
import { nav, NEWSLETTER_PATH } from "./data/navigation";

// Flatten the nav model into a unique list of secondary routes.
const secondaryPaths = new Set();
nav.forEach((item) => {
  secondaryPaths.add(item.path);
  item.children?.forEach((c) => secondaryPaths.add(c.path));
});
secondaryPaths.add("/register");
// The newsletter has its own Sanity-backed routes; /insights redirects to it.
secondaryPaths.delete("/insights");
secondaryPaths.delete(NEWSLETTER_PATH);
// These pages have their own dedicated components below.
secondaryPaths.delete("/about");
secondaryPaths.delete("/epena-law");

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/epena-law" element={<EpenaLaw />} />
          <Route path="/insights" element={<Navigate to={NEWSLETTER_PATH} replace />} />
          <Route path={NEWSLETTER_PATH} element={<BlogListing />} />
          <Route path={`${NEWSLETTER_PATH}/:slug`} element={<BlogPost />} />
          {[...secondaryPaths].map((path) => (
            <Route key={path} path={path} element={<GenericPage />} />
          ))}
          <Route
            path="*"
            element={
              <div className="py-32 text-center">
                <p className="font-display text-3xl text-ink">Page not found</p>
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}