export type TransactionType = 'IN' | 'OUT'; // Entrada o salida de dinero/activo

export interface Transaction {
  id: string;
  portfolioId: string;
  assetName: string; // Ej: "Vanguard Global Stock"
  type: TransactionType;
  amount: number; // Cantidad de unidades
  price: number; // Precio por unidad al que "compró"
  commission: number; // Gastos que quiere deducir
  date: string; // Cuándo ocurrió
  totalValue: number; // (amount * price) + commission -> Calculado
}
