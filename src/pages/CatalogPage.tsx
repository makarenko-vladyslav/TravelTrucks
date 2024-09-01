import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import CatalogList from "../components/CatalogList";

export default function CatalogPage() {
  return (
    <>
      <Header />
      <section className="container wrapper tab:grid tab:grid-cols-[300px_1fr] lap:grid-cols-[360px_1fr] tab:gap-8 desk:gap-16 relative">
        <SearchForm />
        <CatalogList />
      </section>
    </>
  );
}
