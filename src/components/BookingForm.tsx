import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

export default function BookingForm() {
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

  const onSubmit = (values: BookingFormValues, { resetForm }: any) => {
    console.log("Form data", values);
    alert("Booking successful!");
    resetForm();
  };

  return (
    <div className="px-14 py-11 border border-gray rounded-lg w-[641px]">
      <h2 className="text-xl font-semibold mb-2">Book your campervan now</h2>
      <p className="text-sm text-gray-600 mb-4">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-4">
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <Field
              name="bookingDate"
              type="date"
              placeholder="Booking date*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <ErrorMessage
              name="bookingDate"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-6">
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
