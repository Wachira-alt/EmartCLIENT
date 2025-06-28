import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { createProduct, updateProduct } from "../../api/products";
import { FolderPen, Warehouse, Image, AlignLeft  } from "lucide-react";
import { toast } from "sonner";


const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().max(500).optional(),
  price: z.coerce.number().min(0, "Price must be at least 0"),
  stock: z.coerce.number().int().min(0, "Stock must be at least 0"),
  image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

const AdminProductForm = ({ product, onClose }) => {
  const isEdit = !!product;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: product?.title || "",
      description: product?.description || "",
      price: product?.price ?? "",
      stock: product?.stock ?? 0,
      image_url: product?.image_url || "",
    },
  });

  const onSubmit = async (values) => {
  try {
    if (isEdit) {
      await updateProduct(product.id, values);
      toast.success("Product updated successfully");
    } else {
      await createProduct(values);
      toast.success("Product created successfully");
    }
    reset();
    onClose();
  } catch (err) {
    console.error(err);
    toast.error("❌ Something went wrong");
  }
};


  return (
    <div className="my-6 p-6 border rounded bg-white shadow max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Product" : "Add New Product"}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="title"
          label="Title"
          placeholder="Enter title"
          control={control}
           icon={FolderPen}
        />

        <div className="space-y-1">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            icon={AlignLeft}
            render={({ field }) => (
              <Textarea
                id="description"
                placeholder="Enter description (optional)"
                {...field}
              />
            
            )}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <FormField
            name="price"
            label="Price"
            type="number"
            placeholder="0"
            control={control}
          />
          <FormField
            name="stock"
            label="Stock"
            type="number"
            placeholder="0"
            control={control}
            icon={Warehouse}
          />
        </div>

        <FormField
          name="image_url"
          label="Image URL"
          placeholder="https://example.com/image.jpg"
          control={control}
          icon={Image}
        />

        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isEdit ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminProductForm;
