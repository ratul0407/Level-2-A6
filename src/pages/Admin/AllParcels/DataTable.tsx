import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}
const DataTable = <TData, TValue>({
  columns,
  data,
  page,
  totalPage,
  onPageChange,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: totalPage,
  });
  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}

      <Pagination className="mt-16 ">
        <PaginationContent>
          <PaginationItem
            onClick={() => onPageChange(page - 1)}
            className={`${page === 1 && "opacity-50 pointer-events-none"}`}
          >
            <PaginationPrevious href="#" />
          </PaginationItem>
          {Array.from({ length: totalPage }, (_, index) => index + 1).map(
            (currentPage) => {
              return (
                <PaginationItem
                  key={currentPage}
                  onClick={() => onPageChange(currentPage)}
                >
                  <PaginationLink isActive={page === currentPage}>
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
              );
            }
          )}
          <PaginationItem
            onClick={() => onPageChange(page + 1)}
            className={`${
              page === totalPage && "opacity-50 pointer-events-none"
            } `}
          >
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default DataTable;
