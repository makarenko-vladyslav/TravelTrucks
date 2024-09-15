import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDateField from "../components/CustomDateField";
import Button from "../../../components/Button";
import { BookingFormValues } from "../../../types/types";

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

const BookingForm: React.FC = () => {
  const onSubmit = (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    toast.success("Booking successful!");
    resetForm();
  };

  return (
    <div className="px-14 py-11 border border-grayLight h-full rounded-lg w-[641px]">
      <h2 className="text-xl font-semibold mb-2">Book your campervan now</h2>
      <p className="text-gray-700 mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="relative flex flex-col gap-[14px] h-full">
          <span className="w-full relative">
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs mb-[10px]"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="absolute left-4 text-button text-sm"
            />
          </span>

          <span className="w-full relative">
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs mb-[10px]"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="absolute left-4 text-button text-sm"
            />
          </span>

          <span className="w-full relative">
            <Field
              name="bookingDate"
              placeholder="Booking date*"
              component={CustomDateField}
            />
            <ErrorMessage
              name="bookingDate"
              component="span"
              className="absolute left-4 text-button text-sm"
            />
          </span>

          <span className="w-full relative ">
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
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
};

export default BookingForm;
