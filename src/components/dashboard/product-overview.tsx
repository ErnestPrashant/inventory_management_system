import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Product } from "@/lib/types";

interface ProductOverviewProps {
  products: Product[];
}

export default function ProductOverview({ products }: ProductOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Stock Overview</CardTitle>
        <CardDescription>Current inventory levels and costing for all products.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
            <Table>
              <TableHeader className="sticky top-0 bg-card">
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Current Quantity</TableHead>
                  <TableHead className="text-right">Total Inventory Cost</TableHead>
                  <TableHead className="text-right">Avg. Cost per Unit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">{product.id}</div>
                    </TableCell>
                    <TableCell className="text-right font-mono">{product.currentQuantity.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono">${product.totalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                    <TableCell className="text-right font-mono">${product.averageCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
