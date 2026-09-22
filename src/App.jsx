// Inside src/App.jsx
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import EpenaLaw from "./pages/EpenaLaw";
import GenericPage from "./pages/GenericPage";
import BlogListing from "./pages/BlogListing";
import BlogPost from "./pages/BlogPost";
import Newsletter from "./pages/Newsletter";
import WhyLagos from "./pages/WhyLagos";
import Speakers from "./pages/Speakers";
import Accommodation from "./pages/Accommodation";
import Travel from "./pages/Travel";
import SideEventsProgram from "./pages/SideEventsProgram";
import SponsorsPage from "./pages/SponsorsPage";
import MainProgramPage from "./pages/MainProgramPage";
import {
  nav,
  registerLink,
  contactLink,
  NEWSLETTER_PATH,
  BLOG_PATH,
} from "./data/navigation";

// Flatten the (possibly nested) nav model into a unique list of secondary routes.
function collectPaths(items, set) {
  items.forEach((item) => {
    set.add(item.path);
    if (item.children?.length) {
      collectPaths(item.children, set);
    }
  });
}

const secondaryPaths = new Set();
collectPaths(nav, secondaryPaths);
secondaryPaths.add(registerLink.path);
secondaryPaths.add(contactLink.path);

// Content pages linked directly from the homepage Hero rather than a dropdown.
[
  "/past-events/fabs-2025/road-to-fabs-2025/drc-sip-and-learn",
].forEach((path) => secondaryPaths.add(path));

// The newsletter and blog have their own routes; /insights redirects to the newsletter.
secondaryPaths.delete("/insights");
secondaryPaths.delete(NEWSLETTER_PATH);
secondaryPaths.delete(BLOG_PATH);
// These pages have their own dedicated components below.
secondaryPaths.delete("/about");
secondaryPaths.delete("/epena-law");
secondaryPaths.delete("/resources/accommodation");
secondaryPaths.delete("/resources/travel");
secondaryPaths.delete("/resources/sponsorship");
secondaryPaths.delete("/past-events/fabs-2024/speakers");
secondaryPaths.delete("/past-events/fabs-2024/main-program");
secondaryPaths.delete("/past-events/fabs-2024/side-events-program");
secondaryPaths.delete("/past-events/fabs-2025/fabs-2025/why-lagos");
secondaryPaths.delete("/past-events/fabs-2025/fabs-2025/sponsors");

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

          <Route path={NEWSLETTER_PATH} element={<Newsletter />} />

          <Route
            path={BLOG_PATH}
            element={
              <BlogListing
                mode="all"
                title="Blog"
                intro="Longer-form articles and analysis from the FABS and Epena Law team."
                basePath={BLOG_PATH}
              />
            }
          />
          <Route
            path={`${BLOG_PATH}/:slug`}
            element={<BlogPost basePath={BLOG_PATH} backLabel="Blog" />}
          />

          {/* Resources */}
          <Route path="/resources/accommodation" element={<Accommodation />} />
          <Route path="/resources/travel" element={<Travel />} />
          <Route path="/resources/sponsorship" element={<SponsorsPage year="2024" />} />

          {/* Past Events > FABS 2024 */}
          <Route path="/past-events/fabs-2024/speakers" element={<Speakers />} />
          <Route path="/past-events/fabs-2024/main-program" element={<MainProgramPage />} />
          <Route
            path="/past-events/fabs-2024/side-events-program"
            element={<SideEventsProgram />}
          />

          {/* Past Events > FABS 2025 */}
          <Route path="/past-events/fabs-2025/fabs-2025/why-lagos" element={<WhyLagos />} />
          <Route
            path="/past-events/fabs-2025/fabs-2025/sponsors"
            element={<SponsorsPage year="2025" />}
          />

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