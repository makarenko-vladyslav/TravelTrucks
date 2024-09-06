import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../redux/selectors";
import { fetchCampers } from "../redux/operations";
import { nextPage, toggleFavorite } from "../redux/campersSlice";
import Button from "./Button";
import CatalogListItem from "./CatalogListItem";
import { AppDispatch } from "../redux/store";
import Loader from "./Loader";

export default function CamperCardCollection() {
  const dispatch: AppDispatch = useDispatch();
  const { hasNextPage, campers, loading, error, favorites } =
    useSelector(selectCampers);

  const handleLoadMore = () => {
    if (hasNextPage) {
      dispatch(nextPage());
      dispatch(fetchCampers());
    }
  };

  const handleToggleFavorite = (camperId: number) => {
    dispatch(toggleFavorite(camperId));
  };

  const isFavorite = (camperId: number) => {
    return favorites.some((favorite) => favorite.id === camperId);
  };

  return (
    <section className="campers-list">
      <>
        <ul className="grid gap-8 w-full mb-10">
          {campers.map((camper) => (
            <li
              key={camper.id}
              className="grid grid-cols-2 lap:grid-cols-[300px_1fr] gap-6 border border-grayLight p-6 rounded-[20px] w-full min-h-[368px] overflow-hidden"
            >
              <CatalogListItem
                camper={camper}
                toggleFavorite={handleToggleFavorite}
                isFavorite={isFavorite(camper.id)}
              />
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center ">
          {hasNextPage &&
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
      </>
    </section>
  );
}
