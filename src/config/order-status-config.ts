import { OrderStatus } from "@/types";

export type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Đã đặt hàng", value: "placed", progressValue: 0 },
  { label: "Đợi xác nhận từ nhà hàng", value: "paid", progressValue: 25 },
  { label: "Đang chuẩn bị món ăn", value: "inProgress", progressValue: 50 },
  { label: "Đang giao hàng", value: "outForDelivery", progressValue: 75 },
  { label: "Đã giao hàng", value: "delivered", progressValue: 100 },
];
