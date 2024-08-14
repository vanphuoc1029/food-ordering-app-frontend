import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { numberWithCommas } from "@/config/numberFormat";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    return totalPrice;
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold tracking-tight flex justify-between">
          <span>Món bạn đã chọn</span>
          <span className="text-green-500">
            {numberWithCommas(getTotalCost())} VNĐ
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              <Badge variant="outline" className="mr-2">
                {item.name}
              </Badge>
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                onClick={() => {
                  removeFromCart(item);
                }}
              />
              {numberWithCommas(item.price * item.quantity)} VNĐ
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Giá giao hàng</span>
          <span>{numberWithCommas(restaurant.deliveryPrice)}VNĐ</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
