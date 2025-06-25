// collects users info
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CheckoutSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required").matches(/^[0-9]{10}$/, "Invalid phone"),
});

export default function CheckoutForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ fullName: "", address: "", phone: "" }}
      validationSchema={CheckoutSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label>Full Name</label>
            <Field name="fullName" className="input" />
            <ErrorMessage name="fullName" component="div" className="text-red-500" />
          </div>

          <div>
            <label>Address</label>
            <Field name="address" className="input" />
            <ErrorMessage name="address" component="div" className="text-red-500" />
          </div>

          <div>
            <label>Phone</label>
            <Field name="phone" className="input" />
            <ErrorMessage name="phone" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Place Order
          </button>
        </Form>
      )}
    </Formik>
  );
}
