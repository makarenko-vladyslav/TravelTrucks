import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";

const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const CatalogItemPage = lazy(() => import("../pages/CatalogItemPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const Features = lazy(() => import("../components/Features"));
const Reviews = lazy(() => import("../components/Reviews"));

export default function App() {
  return (
    <Suspense fallback={<Loader fullScreen text="Loading" />}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogItemPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}
