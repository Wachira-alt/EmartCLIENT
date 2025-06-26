import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createProduct,
  updateProduct,
} from "../../api/products";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().max(500),
  price: Yup.number().required("Price is required").min(0),
  stock: Yup.number().required("Stock is required").min(0).integer(),
  image_url: Yup.string().url("Must be a valid URL"),
});

const AdminProductForm = ({ product, onClose }) => {
  const isEdit = !!product;

  const initialValues = {
    title: product?.title || "",
    description: product?.description || "",
    price: product?.price || "",
    stock: product?.stock || 0,
    image_url: product?.image_url || "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (isEdit) {
        await updateProduct(product.id, values);
        alert("Product updated successfully!");
      } else {
        await createProduct(values);
        alert("Product created successfully!");
      }
      resetForm();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="my-6 p-6 border rounded bg-white shadow max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Product" : "Add New Product"}
      </h3>

      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block">Title</label>
              <Field name="title" className="w-full p-2 border rounded" />
              <ErrorMessage name="title" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block">Description</label>
              <Field
                name="description"
                as="textarea"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block">Price</label>
                <Field name="price" type="number" className="w-full p-2 border rounded" />
                <ErrorMessage name="price" component="div" className="text-red-500" />
              </div>

              <div className="flex-1">
                <label className="block">Stock</label>
                <Field name="stock" type="number" className="w-full p-2 border rounded" />
                <ErrorMessage name="stock" component="div" className="text-red-500" />
              </div>
            </div>

            <div>
              <label className="block">Image URL</label>
              <Field name="image_url" className="w-full p-2 border rounded" />
              <ErrorMessage name="image_url" component="div" className="text-red-500" />
            </div>

            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {isEdit ? "Update" : "Create"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminProductForm;
