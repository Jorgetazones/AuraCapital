import type { Portfolio } from '../types/Portfolio';
import type { Transaction } from '../types/Transaction';

export const MOCK_PORTFOLIOS: Portfolio[] = [
  { id: 'p1', userId: 'u1', name: 'Cartera Cripto', color: '#F7931A' },
  { id: 'p2', userId: 'u1', name: 'Indexados Largo Plazo', color: '#007AFF' },
  { id: 'p3', userId: 'u1', name: 'Fondo de Emergencia', color: '#34C759' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 't1',
    portfolioId: 'p1',
    assetName: 'Bitcoin',
    type: 'IN',
    amount: 0.05,
    price: 42500,
    commission: 12.5,
    date: '2024-02-01T10:30:00Z',
    totalValue: 2137.5,
  },
  {
    id: 't2',
    portfolioId: 'p2',
    assetName: 'Vanguard Global Stock',
    type: 'IN',
    amount: 10,
    price: 105.2,
    commission: 0,
    date: '2024-02-05T14:15:00Z',
    totalValue: 1052.0,
  },
  {
    id: 't3',
    portfolioId: 'p1',
    assetName: 'Ethereum',
    type: 'IN',
    amount: 1.2,
    price: 2300,
    commission: 5.0,
    date: '2024-02-08T09:00:00Z',
    totalValue: 2765.0,
  },
  {
    id: 't4',
    portfolioId: 'p3',
    assetName: 'Efectivo (Cuenta Sabadell)',
    type: 'IN',
    amount: 5000,
    price: 1,
    commission: 0,
    date: '2024-01-20T12:00:00Z',
    totalValue: 5000.0,
  },
  {
    id: 't5',
    portfolioId: 'p1',
    assetName: 'Solana',
    type: 'OUT',
    amount: 10,
    price: 110,
    commission: 2.0,
    date: '2024-02-10T18:45:00Z',
    totalValue: 1098.0,
  },
];
