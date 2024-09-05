import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import Button from "./Button";
import CatalogListItem from "./CatalogListItem";
import Loader from "./Loader";

import {
  selectCampers,
  selectLoading,
  selectFilters,
  selectLimit,
  selectTotalCampers,
  selectPage,
} from "../redux/selectors";
import { getCampers } from "../redux/operations";
import { setPage } from "../redux/filtersSlice";

export default function CatalogList() {
  const dispatch: AppDispatch = useDispatch();

  const totalCampers = useSelector(selectTotalCampers);
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);

  const filters = useSelector(selectFilters);
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);
  const isLastPage = Math.ceil(totalCampers / limit) <= page;

  useEffect(() => {
    dispatch(getCampers({ page, limit, ...filters }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, limit, filters]);

  return (
    <section className="campers-list">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ul className="grid gap-8 w-full">
            {campers.map((camper) => (
              <CatalogListItem
                key={camper.id + Math.random()}
                camper={camper}
              />
            ))}
          </ul>

          {!isLastPage && (
            <Button
              onClick={() => dispatch(setPage(page + 1))}
              width="145px"
              className="mx-auto text-main bg-white border border-grayLight hover:bg-white hover:border-buttonHover"
            >
              Show more
            </Button>
          )}
        </>
      )}
    </section>
  );
}
