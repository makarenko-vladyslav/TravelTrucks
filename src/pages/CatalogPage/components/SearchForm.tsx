import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { CiMap } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { GiGasStove } from "react-icons/gi";
import { HiOutlineRadio } from "react-icons/hi2";
import { PiWind, PiBathtub } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import {
  MdOutlineTv,
  MdLocalGasStation,
  MdOutlineElectricRickshaw,
} from "react-icons/md";
import {
  TbMicrowave,
  TbAutomaticGearbox,
  TbManualGearboxFilled,
} from "react-icons/tb";
import {
  BsCupHot,
  BsDroplet,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
  BsFuelPumpDiesel,
} from "react-icons/bs";

import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { cleanFilters } from "../../../utils/cleanFilters";
import { setFilters } from "../../../redux/filtersSlice";
import { clearCampers } from "../../../redux/campersSlice";
import { AppDispatch } from "../../../redux/store";
import { SearchFormValues } from "../../../types/types";
import { mapSearchFormValuesToFilters } from "../../../utils/mapSearchFormValuesToFilters";

const validationSchema = Yup.object({
  location: Yup.string(),
  vehicleType: Yup.string(),
  transmission: Yup.string(),
  engine: Yup.string(),
  AC: Yup.boolean(),
  bathroom: Yup.boolean(),
  kitchen: Yup.boolean(),
  TV: Yup.boolean(),
  radio: Yup.boolean(),
  refrigerator: Yup.boolean(),
  microwave: Yup.boolean(),
  gas: Yup.boolean(),
  water: Yup.boolean(),
});

export default function SearchForm() {
  const dispatch = useDispatch<AppDispatch>();
  const sidebar = document.querySelector(".sidebar");

  sidebar?.classList.toggle("show-sidebar");

  const handleClick = () => {
    sidebar?.classList.toggle("show-sidebar");
  };

  const handleSubmit = (values: SearchFormValues) => {
    const clearFilters = cleanFilters(mapSearchFormValuesToFilters(values));
    dispatch(clearCampers());
    dispatch(setFilters(clearFilters));
  };

  return (
    <aside className="sidebar w-fit">
      <IoClose onClick={handleClick} className="block tab:hidden" />

      <Formik<SearchFormValues>
        initialValues={{
          location: "",
          form: "",
          transmission: "",
          engine: "",
          AC: false,
          bathroom: false,
          kitchen: false,
          TV: false,
          radio: false,
          refrigerator: false,
          microwave: false,
          gas: false,
          water: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          // <Form className="w-[250px] desk:w-[360px]">
          <Form className="w-[250px] desk:w-[360px]">
            <div className="mb-10">
              <label htmlFor="location" className="text-gray mb-2 block">
                Location
              </label>

              <div className="relative">
                <CiMap className="absolute left-5 top-1/2 transform -translate-y-1/2 size-5 text-main" />

                <Field
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Exp: Kyiv"
                  className="border-none rounded-xl w-full py-4 pl-12 pr-5 bg-inputs placeholder:text-text"
                />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-text font-medium mb-8 block">Filters</h3>

              <h3 className="after-line">Transmission</h3>
              <div className="grid grid-cols-2 lap:gap-4 desk:grid-cols-3 gap-4 text-center pt-6">
                <label
                  className={`custom-label p-1.5 border-2 rounded-lg ${
                    values.transmission === "automatic" ? "border-button" : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="transmission"
                    value="automatic"
                    className="hidden"
                  />
                  <span className="flex flex-col items-center justify-center">
                    <TbAutomaticGearbox className="w-7 h-auto mb-2.5" />{" "}
                    Automatic
                  </span>
                </label>

                <label
                  className={`custom-label p-1.5 border-2 rounded-lg ${
                    values.transmission === "manual" ? "border-button" : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="transmission"
                    value="manual"
                    className="hidden"
                  />
                  <span className="flex flex-col items-center justify-center">
                    <TbManualGearboxFilled className="w-7 h-auto mb-2.5" />{" "}
                    Manual
                  </span>
                </label>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="after-line">Engine</h3>
              <div className="grid grid-cols-2 lap:gap-4 desk:grid-cols-3 gap-4 text-center pt-6">
                <label
                  className={`custom-label p-1.5 border-2 rounded-lg ${
                    values.engine === "diesel" ? "border-button" : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="engine"
                    value="diesel"
                    className="hidden"
                  />
                  <span className="flex gap-1 flex-col items-center justify-center">
                    <BsFuelPumpDiesel className="h-6 w-full mb-2.5" /> Diesel
                  </span>
                </label>

                <label
                  className={`custom-label p-1.5 border-2 rounded-lg ${
                    values.engine === "petrol" ? "border-button" : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="engine"
                    value="petrol"
                    className="hidden"
                  />
                  <span className="flex flex-col items-center justify-center">
                    <MdLocalGasStation className="w-8 h-auto mb-2.5" />
                    Petrol
                  </span>
                </label>

                <label
                  className={`custom-label p-1.5 border-2 rounded-lg ${
                    values.engine === "hybrid" ? "border-button" : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="engine"
                    value="hybrid"
                    className="hidden"
                  />
                  <span className="flex flex-col items-center justify-center">
                    <MdOutlineElectricRickshaw className="w-8 h-auto mb-2.5" />{" "}
                    Hybrid
                  </span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="after-line">Vehicle equipment</h3>

              <div className="grid grid-cols-2 lap:gap-4 desk:grid-cols-3 gap-4 text-center pt-6 pb-8">
                <label
                  className={`custom-label 
                    ${values.AC ? "border-button" : ""}`}
                >
                  <Field type="checkbox" name="AC" className="hidden" />
                  <PiWind className="w-8 h-auto mb-2.5" />
                  <span className="font-medium">AC</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.bathroom ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="bathroom"
                    className="hidden"
                    checked={values.bathroom}
                  />
                  <PiBathtub className="w-8 h-auto mb-2.5" />
                  <span>Bathroom</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.kitchen ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="kitchen"
                    className="hidden"
                    checked={values.kitchen}
                  />
                  <BsCupHot className="w-8 h-auto mb-2.5" />
                  <span>Kitchen</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.TV ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="TV"
                    className="hidden"
                    checked={values.TV}
                  />
                  <MdOutlineTv className="w-8 h-auto mb-2.5" />
                  <span>TV</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.radio ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="radio"
                    className="hidden"
                    checked={values.radio}
                  />
                  <HiOutlineRadio className="w-8 h-auto mb-2.5" />
                  <span>Radio</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.refrigerator ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="refrigerator"
                    className="hidden"
                    checked={values.refrigerator}
                  />
                  <CgSmartHomeRefrigerator className="w-8 h-auto mb-2.5" />
                  <span>Refrigerator</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.microwave ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="microwave"
                    className="hidden"
                    checked={values.microwave}
                  />
                  <TbMicrowave className="w-8 h-auto mb-2.5" />
                  <span>Microwave</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.gas ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="gas"
                    className="hidden"
                    checked={values.gas}
                  />
                  <GiGasStove className="w-8 h-auto mb-2.5" />
                  <span>Gas</span>
                </label>

                <label
                  className={`custom-label 
                    ${values.water ? "border-button" : ""}`}
                >
                  <Field
                    type="checkbox"
                    name="water"
                    className="hidden"
                    checked={values.water}
                  />
                  <BsDroplet className="w-8 h-auto mb-2.5" />
                  <span>Water</span>
                </label>
              </div>
            </div>

            <h3 className="after-line">Vehicle Type</h3>
            <div className="grid grid-cols-2 lap:gap-4 desk:grid-cols-3 gap-4 text-center pt-6 pb-10">
              <label
                className={`custom-label p-1.5 border-2 rounded-lg ${
                  values.form === "panelTruck" ? "border-button" : ""
                }`}
              >
                <Field
                  type="radio"
                  name="form"
                  value="panelTruck"
                  className="hidden"
                />
                <BsGrid1X2 className="w-8 h-auto mb-2.5" />
                <span>Van</span>
              </label>

              <label
                className={`custom-label p-1.5 border-2 rounded-lg ${
                  values.form === "fullyIntegrated" ? "border-button" : ""
                }`}
              >
                <Field
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                  className="hidden"
                />
                <BsGrid className="w-8 h-auto mb-2" />
                <span className="leading-[1]">Fully integrated</span>
              </label>

              <label
                className={`custom-label p-1.5 border-2 rounded-lg ${
                  values.form === "alcove" ? "border-button" : ""
                }`}
              >
                <Field
                  type="radio"
                  name="form"
                  value="alcove"
                  className="hidden"
                />
                <BsGrid3X3Gap className="w-8 h-auto mb-2.5" />
                <span>Alcove</span>
              </label>
            </div>

            <Button width="166px" className="text-white" type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </aside>
  );
}
