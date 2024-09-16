import React from "react";
import Header from "../../components/Header";
import SearchForm from "./components/SearchForm";
import CatalogList from "./components/CatalogList";

const CatalogPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="catalog-page wrapper max-w-[1440px] mx-auto grid grid-cols-1 tab:grid-cols-[240px_1fr] tab:gap-12 desk:gap-16 desk:grid-cols-[360px_1fr] relative">
        <SearchForm />
        <CatalogList />
      </main>
    </>
  );
};

export default CatalogPage;
