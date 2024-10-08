import { Suspense, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchCamperById } from "../../redux/operations";
import Header from "../../components/Header";
import CamperDetails from "./components/CamperDetails";
import CamperGallery from "./components/CamperGallery";
import CamperDescription from "./components/CamperDescription";
import CamperNavigation from "./components/CamperNavigation";
import Loader from "../../components/Loader";
import { selectCampers } from "../../redux/selectors";
import BookingForm from "./components/BookingForm";

export default function CatalogItemPage() {
  const { id } = useParams<{ id: string | undefined }>();
  const dispatch = useDispatch<AppDispatch>();

  const { currentItem, loading } = useSelector(selectCampers);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <Header />
      <section className="wrapper max-w-[1440px] mx-auto">
        {loading ? (
          <Loader fullScreen />
        ) : (
          <>
            {!currentItem ? (
              <div className="text-center">Camper not found</div>
            ) : (
              <>
                <CamperDetails {...currentItem} />
                <CamperGallery gallery={currentItem.gallery} />
                <CamperDescription description={currentItem.description} />

                <section className="booking">
                  <CamperNavigation />

                  <div className="py-11 grid gap-10 grid-cols-1 lap:grid-cols-2">
                    <Suspense fallback={<Loader />}>
                      <Outlet />
                    </Suspense>
                    <BookingForm />
                  </div>
                </section>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
