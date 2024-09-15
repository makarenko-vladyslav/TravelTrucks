import React from "react";
import Header from "../../components/Header";
import SearchForm from "./components/SearchForm";
import CatalogList from "./components/CatalogList";

const CatalogPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="catalog-page container wrapper tab:grid tab:grid-cols-[300px_1fr] lap:grid-cols-[360px_1fr] tab:gap-8 desk:gap-16 relative">
        <SearchForm />
        <CatalogList />
      </main>
    </>
  );
};

export default CatalogPage;
