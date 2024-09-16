import React, { useState } from "react";
import Header from "../../components/Header";
import SearchForm from "./components/SearchForm";
import CatalogList from "./components/CatalogList";

import { IoFilterCircleOutline } from "react-icons/io5";

const CatalogPage: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebar = document.querySelector(".sidebar");

  const handleOpenModal = () => {
    sidebar?.classList.toggle("show-sidebar");
    setShowSidebar(!showSidebar);

  };

  return (
    <>
      <Header />
      <main className="catalog-page wrapper max-w-[1440px] mx-auto grid grid-cols-1 tab:grid-cols-[240px_1fr] tab:gap-12 desk:gap-16 desk:grid-cols-[360px_1fr] relative">
        <SearchForm
          handleOpenModal={handleOpenModal}
          showSidebar={showSidebar}
        />
        <CatalogList />
      </main>

      <IoFilterCircleOutline
        onClick={handleOpenModal}
        className="absolute top-[30px] size-9 mobLarge:size-8 mobLarge:top-5 z-50 right-14  text-gray hover:text-buttonHover transition-colors duration-300 cursor-pointer tab:hidden"
      />
    </>
  );
};

export default CatalogPage;
