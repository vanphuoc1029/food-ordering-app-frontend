import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Restaurant } from "@/types";
import { Separator } from "@/components/ui/separator";
import DetailsSection from "./DetailsSection";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const formSchema = z
  .object({
    restaurantName: z.string({
      required_error: "Bạn phải nhập tên nhà hàng!",
    }),
    city: z.string({
      required_error: "Bạn phải nhập tên thành phố!",
    }),
    country: z.string({
      required_error: "Bạn phải nhập tên quốc gia!",
    }),
    deliveryPrice: z.coerce.number({
      required_error: "Giá giao hàng không được để trống!",
      invalid_type_error: "Giá giao phải là một con số dương.",
    }),
    estimatedDeliveryTime: z.coerce.number({
      required_error: "Thời gian giao hàng dự kiến không được để trống!",
      invalid_type_error: "Thời gian giao hàng phải là một con số dương.",
    }),
    cuisines: z.array(z.string()).nonempty({
      message: "Vui lòng chọn ít nhất một thể loại",
    }),
    menuItems: z.array(
      z.object({
        name: z.string().min(1, "Tên món ăn không được để trống!"),
        price: z.coerce.number().min(1, "Giá món ăn phải lớn hơn 1!"),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z
      .instanceof(File, { message: "Yêu cầu thêm hình ảnh!" })
      .optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Yêu cầu thêm hình ảnh!",
    path: ["imageFile"],
  });

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
  restaurant?: Restaurant;
};

const ManageRestaurantForm = ({ onSave, isLoading, restaurant }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!restaurant) return;
    form.reset(restaurant);
  }, [form, restaurant]);

  const onSubmit = (formDataJson: RestaurantFormData) => {
    // TODO - corvert formDataJson to a new FormData object
    console.log("Submited");
    const formData = new FormData();

    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);

      formData.append(`menuItems[${index}][price]`, menuItem.price.toString());
    });

    if (formDataJson.imageFile) {
      formData.append("imageFile", formDataJson.imageFile);
    }

    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Lưu</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
