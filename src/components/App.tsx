import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const CatalogItemPage = lazy(() => import("../pages/CatalogItemPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogItemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}
