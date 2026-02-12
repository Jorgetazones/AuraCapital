export interface User {
  id: string;
  name: string;
  email: string;
  currency: 'EUR' | 'USD'; // Su "hoja" se calculará en esta moneda
  createdAt: string;
}
