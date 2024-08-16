import { Order } from "@/types";
import { Separator } from "./ui/separator";
import { numberWithCommas } from "@/config/numberFormat";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Giao hàng đến</span>
        <span>{order.deliveryDetails.name}</span>
        <span>{order.deliveryDetails.addressLine1}</span>
        <span>{order.deliveryDetails.city}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Chi tiết đơn hàng:</span>
        <ul>
          {order.cartItems.map((item) => (
            <li>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span>Tổng tiền:</span>
        <span className="font-bold">
          {order?.totalAmount !== undefined
            ? numberWithCommas(order.totalAmount)
            : "0"}{" "}
          VNĐ
        </span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
