import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";

import SearchFormFields from "./SearchFormFields";

import { cleanFilters } from "../../../utils/cleanFilters";
import { mapSearchFormValuesToFilters } from "../../../utils/mapSearchFormValuesToFilters";
import { validationSchema } from "../../../utils/validationSchema";
import {
  clearUrlFilters,
  getFiltersFromUrl,
  getInitialValues,
  updateUrlWithFilters,
} from "../../../utils/filterUtils";

import SyncFormValuesWithState from "../../ItemPage/components/SyncFormValuesWithState";
import { SearchFormValues, SearchFormProps } from "../../../types/types";

import { setFilters } from "../../../redux/filtersSlice";
import { clearCampers } from "../../../redux/campersSlice";
import { AppDispatch } from "../../../redux/store";
import { selectFilters } from "../../../redux/selectors";

export default function SearchForm({ showSidebar }: SearchFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const filtersFromState = useSelector(selectFilters);

  const handleSubmit = (values: SearchFormValues) => {
    const clearFilters = cleanFilters(mapSearchFormValuesToFilters(values));

    if (Object.keys(clearFilters).length > 0) {
      dispatch(clearCampers());
      dispatch(setFilters(clearFilters));
      updateUrlWithFilters(clearFilters);
    }
  };

  const handleReset = (resetForm: () => void) => {
    resetForm();
    dispatch(setFilters({}));
    clearUrlFilters();
  };

  useEffect(() => {
    const filtersFromUrl = getFiltersFromUrl();

    if (Object.keys(filtersFromUrl).length > 0) {
      dispatch(setFilters(filtersFromUrl));
    }
  }, [dispatch]);

  return (
    <aside
      className={`sidebar w-fit relative ${showSidebar ? "show-sidebar" : ""}`}
    >
      <Formik<SearchFormValues>
        initialValues={getInitialValues(filtersFromState)}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm }) => (
          <Form className="w-[250px] desk:w-[360px]">
            <SearchFormFields
              values={values}
              handleReset={() => handleReset(resetForm)}
              resetForm={resetForm}
              filtersFromState={filtersFromState}
            />
            <SyncFormValuesWithState filtersFromState={filtersFromState} />
          </Form>
        )}
      </Formik>
    </aside>
  );
}
