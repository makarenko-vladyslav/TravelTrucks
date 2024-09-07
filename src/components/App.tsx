import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const ItemPage = lazy(() => import("../pages/ItemPage/ItemPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const Features = lazy(() => import("../pages/ItemPage/components/Features"));
const Reviews = lazy(() => import("../pages/ItemPage/components/Reviews"));

export default function App() {
  return (
    <Suspense fallback={<Loader fullScreen text="Loading" />}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ItemPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}
