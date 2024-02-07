import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export const TableExample = () => {
  const transactions = [
    {
      DATE: "06 Feb 2024 17:34:49",
      AMOUNT: "₹ 40,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "06 Feb 2024 18:13:05",
      AMOUNT: "₹ 20,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "06 Feb 2024 17:39:44",
      AMOUNT: "₹ 20,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "06 Feb 2024 17:35:52",
      AMOUNT: "₹ 20,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "06 Feb 2024 16:30:57",
      AMOUNT: "₹ 20,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "23 Jan 2024 11:17:11",
      AMOUNT: "₹ 10,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "23 Jan 2024 00:52:52",
      AMOUNT: "₹ 10,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "23 Jan 2024 00:52:51",
      AMOUNT: "₹ 10,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "23 Jan 2024 00:52:50",
      AMOUNT: "₹ 10,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
    {
      DATE: "23 Jan 2024 00:52:53",
      AMOUNT: "₹ 1,000.00",
      ACTIVITY: "Plan Cancelled",
      WALLET: "Growpital",
      TYPE: "CREDIT",
    },
  ];

  return (
    <Table className="border">
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="py-3">DATE</TableHead>
          <TableHead className="py-3">AMOUNT</TableHead>
          <TableHead className="py-3">ACTIVITY</TableHead>
          <TableHead className="py-3">WALLET</TableHead>
          <TableHead className="py-3">TYPE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transactions) => (
          <TableRow key={transactions.DATE}>
            <TableCell>{transactions.DATE}</TableCell>
            <TableCell>{transactions.AMOUNT}</TableCell>
            <TableCell>{transactions.ACTIVITY}</TableCell>
            <TableCell>{transactions.WALLET}</TableCell>
            <TableCell>{transactions.TYPE}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">₹2,500000.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
