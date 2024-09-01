import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import Button from "./Button";
import CatalogListItem from "./CatalogListItem";
import Loader from "./Loader";
import { fetchCampers } from "../utils/api";
import {
  selectCampers,
  selectLoading,
  selectFilters,
  selectCurrentPage,
  selectItemsPerPage,
} from "../redux/selectors";
import { loadMore } from "../redux/camperSlice";

export default function CatalogList() {
  const dispatch: AppDispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const filters = useSelector(selectFilters);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(
      fetchCampers({ ...filters, page: currentPage, limit: itemsPerPage })
    );
  }, [dispatch, filters, currentPage, itemsPerPage]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <section className="campers-list">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ul className="grid gap-8 w-full">
            {campers.map((camper) => (
              <CatalogListItem key={camper.id} camper={camper} />
            ))}
          </ul>
          <Button
            onClick={handleLoadMore}
            width="145px"
            className="mx-auto text-main bg-white border border-grayLight hover:bg-white hover:border-buttonHover"
          >
            Show more
          </Button>
        </>
      )}
    </section>
  );
}
