import { cn } from "@/utils";
import { ComponentProps, forwardRef } from "react";

type TableProps = ComponentProps<"table">;
type TableHeaderProps = ComponentProps<"thead">;
type TableBodyProps = ComponentProps<"tbody">;
type TableFooterProps = ComponentProps<"tfoot">;
type TableHeadProps = ComponentProps<"th">;
type TableRowProps = ComponentProps<"tr">;

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
        ref={ref}
      />
    </div>
  )
);
Table.displayName = "Table";

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead className={cn("[&_tr]:border-b", className)} {...props} ref={ref} />
  )
);

TableHeader.displayName = "TableHeader";

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
      ref={ref}
    />
  )
);

TableBody.displayName = "TableBody";

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
      ref={ref}
    />
  )
);

TableFooter.displayName = "TableFooter";

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
      ref={ref}
    />
  )
);

TableRow.displayName = "TableRow";

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
      ref={ref}
    />
  )
);

TableHead.displayName = "TableHead";

const TableCell = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <td
      className={cn(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
      ref={ref}
    />
  )
);

TableCell.displayName = "TableCell";

const TableCaption = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <caption
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
      ref={ref}
    />
  )
);

TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
