import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./Button";

interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

const initialValues: BookingFormValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.string().required("Booking date is required"),
  comment: Yup.string(),
});

export default function BookingForm() {
  const onSubmit = (values: BookingFormValues, { resetForm }: any) => {
    toast.success("Booking successful!");
    resetForm();
  };

  return (
    <div className="px-14 py-11 border border-grayLight rounded-lg w-[641px] h-fit">
      <h2 className="text-xl font-semibold mb-2">Book your campervan now</h2>
      <p className="text-text mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="relative flex flex-col gap-[14px] justify-center items-center">
          <span className="w-full relative">
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs"
            />

            <ErrorMessage
              name="name"
              component="span"
              className="absolute z-10 bottom-[-14px] left-5 text-button text-[12px]"
            />
          </span>

          <span className="w-full relative">
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs"
            />

            <ErrorMessage
              name="email"
              component="span"
              className="absolute z-10 bottom-[-14px] left-5 text-button text-[12px]"
            />
          </span>

          <span className="w-full relative">
            <Field
              name="bookingDate"
              type="date"
              placeholder="Booking date*"
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs"
            />

            <ErrorMessage
              name="bookingDate"
              component="span"
              className="absolute z-10 bottom-[-14px] left-5 text-button text-[12px]"
            />
          </span>

          <span className="w-full relative">
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              rows={4}
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs mb-[10px]"
            />

            <ErrorMessage
              name="comment"
              component="span"
              className="absolute left-4 text-button text-sm"
            />
          </span>
          <Button width="166px" className="text-white mx-auto" type="submit">
            Send
          </Button>
        </Form>
      </Formik>

      <ToastContainer />
    </div>
  );
}
