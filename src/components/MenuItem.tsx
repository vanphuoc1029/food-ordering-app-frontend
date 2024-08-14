import { MenuItem as menuItem } from "../types";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { numberWithCommas } from "../config/numberFormat";
type Props = {
  menuItem: menuItem;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        {numberWithCommas(menuItem.price)} VNĐ
      </CardContent>
    </Card>
  );
};

export default MenuItem;
