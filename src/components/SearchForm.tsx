import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import { GiGasStove } from "react-icons/gi";
import { TbMicrowave } from "react-icons/tb";
import { MdOutlineTv } from "react-icons/md";
import { HiOutlineRadio } from "react-icons/hi2";
import { PiBathtub, PiWind } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import {
  BsCupHot,
  BsDroplet,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from "react-icons/bs";

import Button from "./Button";

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
  const sidebar = document.querySelector(".sidebar");

  sidebar?.classList.toggle("show-sidebar");

  const handleClick = () => {
    sidebar?.classList.toggle("show-sidebar");
  };

  const handleSubmit = (values) => {
    console.log("Search ", values);
  };

  return (
    <aside className="sidebar">
      <IoClose onClick={handleClick} className="block tab:hidden" />

      <Formik
        initialValues={{
          location: "",
          vehicleType: "",
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
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form className="w-[300px] lap:w-[360px] col-span-1">
            <div className="mb-10">
              <label htmlFor="location" className="text-gray mb-2 block">
                Location
              </label>

              <Field
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                className="border rounded-xl w-full py-4 px-5 bg-inputs placeholder:text-main"
              />
            </div>

            <div className="mb-10">
              <label htmlFor="transmission" className="text-gray mb-2 block">
                Transmission
              </label>
              <Field
                as="select"
                id="transmission"
                name="transmission"
                className="border rounded-xl w-full py-4 px-5 bg-inputs"
              >
                <option value="">Select Transmission</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </Field>
            </div>

            <div className="mb-10">
              <label htmlFor="engine" className="text-gray mb-2 block">
                Engine
              </label>
              <Field
                as="select"
                id="engine"
                name="engine"
                className="border rounded-xl w-full py-4 px-5 bg-inputs"
              >
                <option value="">Select Engine</option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="electric">Electric</option>
              </Field>
            </div>

            <span className="text-text font-medium mb-8 block">Filters</span>

            <div>
              <h3 className="after-line">Vehicle equipment</h3>

              <div className="grid grid-cols-3 gap-4 text-center pt-6 pb-8">
                <label className="custom-label">
                  <Field type="checkbox" name="AC" className="hidden" />
                  <PiWind className="w-8 h-auto mb-2.5" />

                  <span className="font-medium">AC</span>
                </label>

                <label className="custom-label">
                  <Field
                    type="checkbox"
                    name="bathroom"
                    className="hidden"
                    checked={values.bathroom}
                  />
                  <PiBathtub className="w-8 h-auto mb-2.5" />
                  <span>Bathroom</span>
                </label>

                <label className="custom-label">
                  <Field
                    type="checkbox"
                    name="kitchen"
                    className="hidden"
                    checked={values.kitchen}
                  />
                  <BsCupHot className="w-8 h-auto mb-2.5" />
                  <span>Kitchen</span>
                </label>

                <label className="custom-label">
                  <Field
                    type="checkbox"
                    name="TV"
                    className="hidden"
                    checked={values.TV}
                  />
                  <MdOutlineTv className="w-8 h-auto mb-2.5" />
                  <span>TV</span>
                </label>

                <label className="custom-label">
                  <Field
                    type="checkbox"
                    name="radio"
                    className="hidden"
                    checked={values.radio}
                  />
                  <HiOutlineRadio className="w-8 h-auto mb-2.5" />
                  <span>Radio</span>
                </label>

                <label className="custom-label">
                  <Field
                    type="checkbox"
                    name="refrigerator"
                    className="hidden"
                    checked={values.refrigerator}
                  />
                  <CgSmartHomeRefrigerator className="w-8 h-auto mb-2.5" />
                  <span>Refrigerator</span>
                </label>

                <label className="custom-label">
                  <Field
                    type="checkbox"
                    name="microwave"
                    className="hidden"
                    checked={values.microwave}
                  />
                  <TbMicrowave className="w-8 h-auto mb-2.5" />
                  <span>Microwave</span>
                </label>

                <label className="custom-label">
                  <Field
                    type="checkbox"
                    name="gas"
                    className="hidden"
                    checked={values.gas}
                  />
                  <GiGasStove className="w-8 h-auto mb-2.5" />
                  <span>Gas</span>
                </label>

                <label className="custom-label">
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
            <div className="grid grid-cols-3 gap-4 text-center pt-6 pb-10">
              <label className="custom-label">
                <Field
                  type="radio"
                  name="vehicleType"
                  value="Van"
                  className="hidden"
                />
                <BsGrid1X2 className="w-8 h-auto mb-2.5" />
                <span>Van</span>
              </label>

              <label className="custom-label p-1.5">
                <Field
                  type="radio"
                  name="vehicleType"
                  value="Fully integrated"
                  className="hidden"
                />
                <BsGrid className="w-8 h-auto mb-2" />
                <span className="leading-[1]">Fully integrated</span>
              </label>

              <label className="custom-label">
                <Field
                  type="radio"
                  name="vehicleType"
                  value="Alcove"
                  className="hidden"
                />
                <BsGrid3X3Gap className="w-8 h-auto mb-2.5" />
                <span>Alcove</span>
              </label>
            </div>

            <Button width="166px" className="text-white">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </aside>
  );
}
