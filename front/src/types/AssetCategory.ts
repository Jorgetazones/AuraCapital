export type AssetCategory = 'CRYPTO' | 'STOCK' | 'COMMODITY' | 'CASH';

export interface Asset {
  id: string;
  ticker: string; // Ej: BTC, AAPL, GOLD
  name: string; // Ej: Bitcoin, Apple Inc.
  category: AssetCategory;
  logoUrl?: string;
  currentPrice: number; // Esto se actualizaría vía API en el futuro
}
