import { Formik, Form, Field } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/ui/atoms/Button";
import { Input } from "@/ui/atoms/Input";
import { DialogFooter } from "@/ui/atoms/Dialog";
import useCreateAsset from "@/ui/hooks/useCreateAsset";
import type { CreateAssetRequest } from "@/ui/models/asset";

import { validationSchema } from "./lib/validationSchema";
import type { AddAssetDialogProps } from "./types";
import { initialValues } from "./lib/initialValues";
import { getCategories } from "@/ui/helpers/getCategories";

const AddAssetDialog = ({ handleSetDialog }: AddAssetDialogProps) => {
  const queryClient = useQueryClient();
  const createAsset = useCreateAsset();

  const handleSubmit = (values: CreateAssetRequest) => {
    createAsset.mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["all-assets"],
        });
        handleSetDialog();
      },
      onError: () => {},
    });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting, status }) => (
        <Form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Field
                as={Input}
                id="name"
                name="name"
                className={errors.name && touched.name ? "border-red-500" : ""}
              />
              {errors.name && touched.name && (
                <div className="text-sm text-red-500">{errors.name}</div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Field
                as="select"
                id="category"
                name="category"
                className={`w-full rounded-md border px-3 py-2 ${
                  errors.category && touched.category
                    ? "border-red-500"
                    : "border-input"
                }`}
              >
                {Object.entries(getCategories()).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Field>
              {errors.category && touched.category && (
                <div className="text-sm text-red-500">{errors.category}</div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="purchaseDate" className="text-sm font-medium">
                Purchase Date
              </label>
              <Field
                as={Input}
                id="purchaseDate"
                name="purchaseDate"
                type="date"
                className={
                  errors.purchaseDate && touched.purchaseDate
                    ? "border-red-500"
                    : ""
                }
              />
              {errors.purchaseDate && touched.purchaseDate && (
                <div className="text-sm text-red-500">
                  {errors.purchaseDate}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="value" className="text-sm font-medium">
                Value
              </label>
              <Field
                as={Input}
                id="value"
                name="value"
                type="number"
                min="0"
                step="0.01"
                className={
                  errors.value && touched.value ? "border-red-500" : ""
                }
              />
              {errors.value && touched.value && (
                <div className="text-sm text-red-500">{errors.value}</div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="brand" className="text-sm font-medium">
                Brand
              </label>
              <Field
                as={Input}
                id="brand"
                name="brand"
                className={
                  errors.brand && touched.brand ? "border-red-500" : ""
                }
              />
              {errors.brand && touched.brand && (
                <div className="text-sm text-red-500">{errors.brand}</div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="model" className="text-sm font-medium">
                Model
              </label>
              <Field
                as={Input}
                id="model"
                name="model"
                className={
                  errors.model && touched.model ? "border-red-500" : ""
                }
              />
              {errors.model && touched.model && (
                <div className="text-sm text-red-500">{errors.model}</div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="serialNumber" className="text-sm font-medium">
                Serial Number (Optional)
              </label>
              <Field as={Input} id="serialNumber" name="serialNumber" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description (Optional)
            </label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows={3}
              className="w-full rounded-md border border-input px-3 py-2"
            />
          </div>

          {status && (
            <div className="text-sm text-red-500 text-center">{status}</div>
          )}

          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
            >
              {isSubmitting ? "Creating..." : "Create Asset"}
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
};

export default AddAssetDialog;
