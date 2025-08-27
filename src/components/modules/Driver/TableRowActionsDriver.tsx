import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IParcel } from "@/types/response/parcel";
import { useState } from "react";

import ParcelDetailsModal from "../Admin/Parcel/ParcelDetailsModal";
import UpdateDeliveryStatus from "./UpdateDeliveryStatusModal";
const TableRowActionsDriver = (parcel: IParcel) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" className="h-6 w-6 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {/* <DropdownMenuItem onClick={() => setOpenDetails(true)}> */}
        <ParcelDetailsModal
          open={openDetails}
          setOpen={setOpenDetails}
          parcel={parcel}
        />
        <UpdateDeliveryStatus
          parcel={parcel}
          closeDropdown={() => setDropdownOpen(false)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableRowActionsDriver;
