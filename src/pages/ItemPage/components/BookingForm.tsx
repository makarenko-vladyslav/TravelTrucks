import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDateField from "../components/CustomDateField";
import Button from "../../../components/Button";
import { BookingFormValues } from "../../../types/types";
import { bookingValidationSchema } from "../../../utils/validationSchemas";

const initialValues: BookingFormValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const BookingForm: React.FC = () => {
  const onSubmit = (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    toast.success("Booking successful!");
    resetForm();
  };

  return (
    <div className="px-4 tab:px-8 desk:px-14 py-11 border border-grayLight h-full rounded-lg w-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-2">Book your campervan now</h2>
        <p className="text-gray-700 mb-6">
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={bookingValidationSchema}
        onSubmit={onSubmit}
      >
        <Form className="relative flex flex-col gap-[14px] h-auto w-full">
          <span className="w-full relative">
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs "
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
              className="w-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs "
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

          <span className="w-full relative h-[180px]">
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className="w-full h-full p-[18px] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs"
            />
            <ErrorMessage
              name="comment"
              component="span"
              className="absolute left-4 text-button text-sm"
            />
          </span>

          <div className="m-auto">
            <Button width="166px" className="text-white mx-auto" type="submit">
              Send
            </Button>
          </div>
        </Form>
      </Formik>

      <ToastContainer />
    </div>
  );
};

export default BookingForm;
