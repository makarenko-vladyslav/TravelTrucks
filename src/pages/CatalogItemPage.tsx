import React, { Suspense, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Header from "../components/Header";
import CamperDetails from "../components/CamperDetails";
import CamperGallery from "../components/CamperGallery";
import CamperDescription from "../components/CamperDescription";
import CamperNavigation from "../components/CamperNavigation";
import isMobileOrTablet from "../hooks/isMobileOrTablet";
import { fetchCamperById } from "../utils/api";
import Loader from "../components/Loader";

export default function CatalogItemPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const isTabletOrMobile = isMobileOrTablet();

  const { camper, loading, error } = useSelector(
    (state: RootState) => state.campers
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, dispatch]);

  if (loading) return <Loader className="h-screen" />;
  if (error) return <div className="text-center">Error: {error}</div>;

  return (
    <>
      <Header />
      <section className="container wrapper">
        {!camper ? (
          <div className="text-center">Camper not found</div>
        ) : (
          <>
            <CamperDetails
              name={camper.name}
              rating={camper.rating}
              reviews={camper.reviews}
              location={camper.location}
              price={camper.price}
            />
            <CamperGallery
              gallery={camper.gallery}
              isTabletOrMobile={isTabletOrMobile}
            />
            <CamperDescription description={camper.description} />
            <CamperNavigation />

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </section>
    </>
  );
}
