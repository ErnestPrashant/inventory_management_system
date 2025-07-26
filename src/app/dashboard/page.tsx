"use client";

import { useState, useMemo, useCallback } from 'react';
import { initialProducts, initialTransactions, generateDummyTransaction } from '@/lib/mock-data';
import type { Product, Transaction } from '@/lib/types';
import DashboardHeader from '@/components/dashboard/header';
import KpiCard from '@/components/dashboard/kpi-card';
import ProductOverview from '@/components/dashboard/product-overview';
import TransactionLedger from '@/components/dashboard/transaction-ledger';
import { Package, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [isSimulating, setIsSimulating] = useState(false);
  const { toast } = useToast();

  const handleSimulate = useCallback(() => {
    if (isSimulating) return;

    setIsSimulating(true);
    toast({
      title: "Simulation Started",
      description: "Generating 7 new transactions...",
    });

    let currentProducts = [...products];
    const transactionsToSimulate = 7;

    for (let i = 0; i < transactionsToSimulate; i++) {
      setTimeout(() => {
        const newTransaction = generateDummyTransaction(currentProducts);
        
        setTransactions(prev => [newTransaction, ...prev]);

        currentProducts = currentProducts.map(p => {
          if (p.id === newTransaction.productId) {
            const newQuantity = newTransaction.type === 'purchase' 
              ? p.currentQuantity + newTransaction.quantity 
              : p.currentQuantity - newTransaction.quantity;
            const costChange = newTransaction.type === 'purchase'
              ? newTransaction.quantity * newTransaction.unitPrice!
              : newTransaction.totalCost!;
            const newTotalCost = newTransaction.type === 'purchase'
              ? p.totalCost + costChange
              : p.totalCost - costChange;
            const newAverageCost = newQuantity > 0 ? newTotalCost / newQuantity : 0;
            return { ...p, currentQuantity: newQuantity, totalCost: newTotalCost, averageCost: newAverageCost };
          }
          return p;
        });
        
        setProducts(currentProducts);

        if (i === transactionsToSimulate - 1) {
          setIsSimulating(false);
          toast({
            title: "Simulation Complete",
            description: "Live data has been updated.",
          });
        }
      }, i * 750);
    }
  }, [isSimulating, products, toast]);
  
  const kpiData = useMemo(() => {
    const totalInventoryValue = products.reduce((sum, p) => sum + p.totalCost, 0);
    const totalUnits = products.reduce((sum, p) => sum + p.currentQuantity, 0);
    const purchases = transactions.filter(t => t.type === 'purchase').length;
    const sales = transactions.filter(t => t.type === 'sale').length;

    return {
        totalInventoryValue,
        totalUnits,
        purchases,
        sales,
    };
  }, [products, transactions]);

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader onSimulate={handleSimulate} isSimulating={isSimulating} />
      <main className="flex-1 p-4 space-y-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard title="Total Inventory Value" value={`$${kpiData.totalInventoryValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} icon={<DollarSign className="w-6 h-6 text-muted-foreground" />} />
          <KpiCard title="Total Units" value={kpiData.totalUnits.toLocaleString()} icon={<Package className="w-6 h-6 text-muted-foreground" />} />
          <KpiCard title="Purchases" value={kpiData.purchases.toLocaleString()} icon={<ArrowUp className="w-6 h-6 text-primary" />} />
          <KpiCard title="Sales" value={kpiData.sales.toLocaleString()} icon={<ArrowDown className="w-6 h-6 text-destructive" />} />
        </div>
        <div className="grid grid-cols-1 gap-8">
          <ProductOverview products={products} />
          <TransactionLedger transactions={transactions} />
        </div>
      </main>
    </div>
  );
}
