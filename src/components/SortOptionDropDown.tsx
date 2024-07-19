import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
  onChange: (value: string) => void;
  sortOptions: string;
};

const SORT_OPTIONS = [
  {
    label: "Phù hợp nhất",
    value: "bestMatch",
  },
  {
    label: "Giá giao hàng",
    value: "deliveryPrice",
  },
  {
    label: "Thời gian giao ước tính",
    value: "estimatedDeliveryTime",
  },
];

const SortOptionDropDown = ({ onChange, sortOptions }: Props) => {
  const selectedSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortOptions)?.label ||
    SORT_OPTIONS[0].label;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full">
          Sắp xếp theo: {selectedSortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropDown;
