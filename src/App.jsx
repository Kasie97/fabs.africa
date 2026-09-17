import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import GenericPage from "./pages/GenericPage";
import BlogListing from "./pages/BlogListing";
import BlogPost from "./pages/BlogPost";
import { nav } from "./data/navigation";

const BLOG_PATH = "/news/afri-spective-blog";

// Flatten the nav model into a unique list of secondary routes.
const secondaryPaths = new Set();
nav.forEach((item) => {
  secondaryPaths.add(item.path);
  item.children?.forEach((c) => secondaryPaths.add(c.path));
});
["/contact", "/media-toolkit", "/newsletter", "/login"].forEach((p) => secondaryPaths.add(p));
// The blog gets its own Sanity-backed routes below instead of the generic template.
secondaryPaths.delete(BLOG_PATH);

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
          <Route path={BLOG_PATH} element={<BlogListing />} />
          <Route path={`${BLOG_PATH}/:slug`} element={<BlogPost />} />
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

