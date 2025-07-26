import type { Product, Transaction } from './types';

export const initialProducts: Product[] = [
  {
    id: 'PRD001',
    name: 'Quantum-Flux Capacitor',
    currentQuantity: 120,
    totalCost: 12500,
    averageCost: 104.17,
  },
  {
    id: 'PRD002',
    name: 'Hyper-Drive Motivator',
    currentQuantity: 75,
    totalCost: 18750,
    averageCost: 250.00,
  },
  {
    id: 'PRD003',
    name: 'Nano-Particle Weave',
    currentQuantity: 250,
    totalCost: 7500,
    averageCost: 30.00,
  },
   {
    id: 'PRD004',
    name: 'Ionic Gel Coolant',
    currentQuantity: 500,
    totalCost: 12500,
    averageCost: 25.00,
  },
];

export const initialTransactions: Transaction[] = [
  {
    id: 'TRN001',
    productId: 'PRD001',
    productName: 'Quantum-Flux Capacitor',
    type: 'purchase',
    quantity: 50,
    unitPrice: 100.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    id: 'TRN002',
    productId: 'PRD002',
    productName: 'Hyper-Drive Motivator',
    type: 'purchase',
    quantity: 100,
    unitPrice: 250.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    id: 'TRN003',
    productId: 'PRD001',
    productName: 'Quantum-Flux Capacitor',
    type: 'purchase',
    quantity: 100,
    unitPrice: 105.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
  },
  {
    id: 'TRN004',
    productId: 'PRD001',
    productName: 'Quantum-Flux Capacitor',
    type: 'sale',
    quantity: 30,
    totalCost: 3000,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
  },
  {
    id: 'TRN005',
    productId: 'PRD002',
    productName: 'Hyper-Drive Motivator',
    type: 'sale',
    quantity: 25,
    totalCost: 6250,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
  },
  {
    id: 'TRN006',
    productId: 'PRD003',
    productName: 'Nano-Particle Weave',
    type: 'purchase',
    quantity: 250,
    unitPrice: 30,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
  },
];

export const generateDummyTransaction = (products: Product[]): Transaction => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const eventType = Math.random() > 0.4 ? 'purchase' : 'sale';

    if (eventType === 'purchase') {
        const quantity = Math.floor(Math.random() * 50) + 10;
        const unitPrice = parseFloat((randomProduct.averageCost * (Math.random() * 0.4 + 0.8)).toFixed(2));
        return {
            id: `TRN${Date.now()}`,
            productId: randomProduct.id,
            productName: randomProduct.name,
            type: 'purchase',
            quantity,
            unitPrice,
            timestamp: new Date().toISOString(),
        };
    } else { // sale
        const quantity = Math.floor(Math.random() * 20) + 5;
        const totalCost = parseFloat((randomProduct.averageCost * quantity * (Math.random() * 0.1 + 0.95)).toFixed(2));
        return {
            id: `TRN${Date.now()}`,
            productId: randomProduct.id,
            productName: randomProduct.name,
            type: 'sale',
            quantity,
            totalCost,
            timestamp: new Date().toISOString(),
        };
    }
};
