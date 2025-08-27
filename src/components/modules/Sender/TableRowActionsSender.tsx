import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IParcel } from "@/types/response/parcel";
import { useState } from "react";
import CancelParcelModal from "../Shared/CancelParcelModal";
import ParcelDetailsModal from "../Admin/Parcel/ParcelDetailsModal";
const TableRowActionsSender = (parcel: IParcel) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" className="h-6 w-6 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <ParcelDetailsModal
          open={openDetails}
          setOpen={setOpenDetails}
          parcel={parcel}
        />

        <CancelParcelModal
          closeDropdown={() => setDropdownOpen(false)}
          parcel={parcel}
          button={false}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableRowActionsSender;
