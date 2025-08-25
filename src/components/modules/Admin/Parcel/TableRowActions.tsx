import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IParcel } from "@/types/response/parcel";
import ParcelDetailsModal from "./ParcelDetailsModal";
import { useState } from "react";
import AssignParcelModal from "./AssignParcelModal";
import CancelParcelModal from "./CancelParcelModal";
const TableRowActions = (parcel: IParcel) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <DropdownMenu>
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
        {/* </DropdownMenuItem> */}
        <AssignParcelModal {...parcel} />
        <CancelParcelModal {...parcel} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableRowActions;
