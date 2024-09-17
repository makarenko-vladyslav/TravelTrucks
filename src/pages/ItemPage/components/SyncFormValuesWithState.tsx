import { useEffect } from "react";
import { useFormikContext } from "formik";
import { getInitialValues } from "../../../utils/filterUtils";
import { Filters } from "../../../types/types";

interface SyncFormValuesWithStateProps {
  filtersFromState: Filters;
}

const SyncFormValuesWithState = ({
  filtersFromState,
}: SyncFormValuesWithStateProps) => {
  const { setValues } = useFormikContext();

  useEffect(() => {
    if (Object.keys(filtersFromState).length > 0) {
      setValues(getInitialValues(filtersFromState));
    }
  }, [filtersFromState, setValues]);

  return null;
};

export default SyncFormValuesWithState;
