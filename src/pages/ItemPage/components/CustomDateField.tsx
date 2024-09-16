import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDateFieldProps } from "../../../types/types";

const CustomDateField: React.FC<CustomDateFieldProps> = ({
  field,
  form,
  placeholder,
}) => {
  const errorMessage = form.errors[field.name];
  const isError = form.touched[field.name] && errorMessage;

  const errorText = typeof errorMessage === "string" ? errorMessage : "";

  return (
    <>
      <DatePicker
        className="p-[18px] min-w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text bg-inputs"
        selected={
          field.value instanceof Date
            ? field.value
            : field.value
            ? new Date(field.value)
            : null
        }
        onChange={(val: Date | null) => {
          form.setFieldValue(field.name, val ? val.toISOString() : "");
          form.validateField(field.name);
        }}
        placeholderText={placeholder}
        dateFormat="MMMM d, yyyy"
      />

      {isError && (
        <span className="absolute text-red-500 text-sm mt-1 left-0">
          {errorText}
        </span>
      )}
    </>
  );
};

export default CustomDateField;
