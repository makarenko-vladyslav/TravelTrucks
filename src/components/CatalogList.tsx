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
  selectPage,
} from "../redux/selectors";
import { getCampers } from "../redux/operations";
import { setPage } from "../redux/filtersSlice";

export default function CatalogList() {
  // const [page, setPage] = useState(1);
  // const limit = 2;

  const dispatch: AppDispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const filters = useSelector(selectFilters);
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);
  const isLastPage = page === Math.ceil(campers.length / limit);

  useEffect(() => {
    dispatch(getCampers({ page, limit, ...filters }));

    console.log("lastPage", isLastPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, filters]);

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

          {isLastPage && (
            <Button
              // onClick={() => dispatch(setPage(page + 1))}
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
