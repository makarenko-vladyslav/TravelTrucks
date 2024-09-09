import { useEffect, useMemo, forwardRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectFilters } from "../../../redux/selectors";
import { fetchCampers } from "../../../redux/operations";
import { nextPage } from "../../../redux/campersSlice";
import Button from "../../../components/Button";
import CatalogItem from "./CatalogItem";
import { AppDispatch } from "../../../redux/store";
import Loader from "../../../components/Loader";

const CatalogList = forwardRef(function CatalogList() {
  const dispatch: AppDispatch = useDispatch();

  const { hasNextPage, campers, loading, error, limit } =
    useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const memoizedCampers = useMemo(() => campers, [campers]);

  const newCamperRef = useRef<HTMLLIElement | null>(null);
  const NEW_CAMPER_INDEX = memoizedCampers.length - limit;
  const isNewCamper = (index: number) => index === NEW_CAMPER_INDEX;

  const scrollToNewCamper = () => {
    if (newCamperRef.current && memoizedCampers.length > limit) {
      newCamperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLoadMore = () => {
    if (hasNextPage) {
      dispatch(nextPage());
      dispatch(fetchCampers());
    }
  };

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch, filters]);

  useEffect(scrollToNewCamper, [memoizedCampers, limit]);

  return (
    <section className="campers-list">
      <ul className="grid gap-8 w-full mb-10">
        {error && (
          <h3 className="text-center text-text font-bold text-xl">{error}</h3>
        )}

        {memoizedCampers.map((camper, index) => (
          <li
            key={camper.id}
            className="grid grid-cols-2 lap:grid-cols-[300px_1fr] gap-6 border border-grayLight p-6 rounded-[20px] w-full min-h-[368px] overflow-hidden"
            ref={isNewCamper(index) ? newCamperRef : null}
          >
            <CatalogItem camper={camper} />
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center">
        {hasNextPage &&
          !error &&
          (loading ? (
            <Loader />
          ) : (
            <Button
              onClick={handleLoadMore}
              width="145px"
              className="text-main bg-white border border-grayLight hover:bg-white hover:border-buttonHover"
            >
              Show more
            </Button>
          ))}
      </div>
    </section>
  );
});

export default CatalogList;
