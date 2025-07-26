import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import type { Transaction } from "@/lib/types";
import { formatDistanceToNow } from 'date-fns';

interface TransactionLedgerProps {
  transactions: Transaction[];
}

export default function TransactionLedger({ transactions }: TransactionLedgerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Ledger</CardTitle>
        <CardDescription>A complete history of all inventory purchases and sales.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader className="sticky top-0 bg-card">
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Value / Cost</TableHead>
                  <TableHead className="text-right">Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} className="transition-opacity hover:bg-muted/50">
                    <TableCell>
                      <div className="font-medium">{transaction.productName}</div>
                      <div className="text-sm text-muted-foreground">{transaction.productId}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={transaction.type === 'purchase' ? 'default' : 'outline'}>
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">{transaction.quantity}</TableCell>
                    <TableCell className="text-right font-mono">
                      $
                      {(transaction.type === 'purchase'
                        ? transaction.quantity * transaction.unitPrice!
                        : transaction.totalCost!
                      ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(transaction.timestamp), { addSuffix: true })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
