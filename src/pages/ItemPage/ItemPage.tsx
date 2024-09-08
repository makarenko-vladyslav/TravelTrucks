import React, { Suspense, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import Header from "../../components/Header";
import CamperDetails from "./components/CamperDetails";
import CamperGallery from "./components/CamperGallery";
import CamperDescription from "./components/CamperDescription";
import CamperNavigation from "./components/CamperNavigation";
import isMobileOrTablet from "../../hooks/isMobileOrTablet";
import { fetchCamperById } from "../../redux/operations";
import Loader from "../../components/Loader";
import { selectCampers } from "../../redux/selectors";

export default function CatalogItemPage() {
  const { id } = useParams<{ id: string | undefined }>();
  const dispatch = useDispatch<AppDispatch>();
  const isTabletOrMobile = isMobileOrTablet();

  const { currentItem, loading } = useSelector(selectCampers);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));

    console.log(id, currentItem);
    
    }
  }, [id, dispatch]);

  return (
    <>
      <Header />
      <section className="container wrapper">
        {loading ? (
          <Loader fullScreen />
        ) : (
          <>
            {!currentItem ? (
              <div className="text-center">Camper not found</div>
            ) : (
              <>
                <CamperDetails currentItem={currentItem} />
                <CamperGallery
                  gallery={currentItem.gallery}
                  isTabletOrMobile={isTabletOrMobile}
                />
                <CamperDescription description={currentItem.description} />
                <CamperNavigation />

                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
