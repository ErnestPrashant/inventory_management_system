export type Product = {
  id: string;
  name: string;
  currentQuantity: number;
  totalCost: number;
  averageCost: number;
};

export type Transaction = {
  id: string;
  productId: string;
  productName: string;
  type: 'purchase' | 'sale';
  quantity: number;
  unitPrice?: number; // for purchases
  totalCost?: number; // for sales
  timestamp: string;
};
