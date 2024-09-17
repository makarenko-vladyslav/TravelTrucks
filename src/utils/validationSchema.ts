import * as Yup from "yup";

export const validationSchema = Yup.object({
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
