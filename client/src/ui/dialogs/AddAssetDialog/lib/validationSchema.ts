import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  purchaseDate: Yup.date().required("Purchase date is required"),
  value: Yup.number()
    .positive("Value must be positive")
    .required("Value is required"),
  brand: Yup.string().required("Brand is required"),
  model: Yup.string().required("Model is required"),
  serialNumber: Yup.string(),
  description: Yup.string(),
});
