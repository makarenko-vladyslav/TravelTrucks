import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import SearchForm from "./components/SearchForm";
import CatalogList from "./components/CatalogList";
import { AppDispatch } from "../../redux/store";
import { fetchCampers } from "../../redux/operations";

export default function CatalogPage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

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
