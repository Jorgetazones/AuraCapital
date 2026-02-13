import { useState } from 'react';
import { Button } from '../components/Button';
import Card from '../components/Card';
import TextInput from '../components/TextInput';
import type { Transaction } from '../../../types/Transaction';

interface Props {
  onSubmit?: (data: Transaction) => void;
}

const InvestingForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    asset: '',
    amount: 0,
    price: 0,
    tax: 0,
    commission: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Operación enviada a Aura Capital:', formData);

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      assetName: formData.asset,
      amount: formData.amount,
      price: formData.price,
      commission: formData.commission,
      type: 'IN',
      date: new Date().toISOString(),
      totalValue: formData.amount * formData.price + formData.commission,
      portfolioId: 'port-1',
    };

    onSubmit?.(newTransaction);

    setFormData({ asset: '', amount: 0, price: 0, tax: 0, commission: 0 });
  };
  return (
    <Card className='max-w-2xl mx-auto p-10'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <h2 className='text-2xl font-semibold text-white'>Nueva operación</h2>
          <p className='text-[#8E8E93] text-sm mt-1'>
            Ingresa los detalles del activo para tu cartera.
          </p>
        </div>

        <div className='space-y-5'>
          <TextInput
            label='Nombre del Activo'
            placeholder='Bitcoin, S&P 500...'
            name='asset'
            value={formData.asset}
            onChange={handleChange}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <TextInput
              label='Cantidad'
              name='amount'
              placeholder='0.00'
              value={formData.amount}
              onChange={handleChange}
            />
            <TextInput
              label='Precio Unitario'
              name='price'
              placeholder='0.00'
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <TextInput
              label='Tasa (%)'
              name='tax'
              placeholder='0.00'
              value={formData.tax}
              onChange={handleChange}
            />
            <TextInput
              label='Comisión'
              name='commission'
              placeholder='0.00'
              value={formData.commission}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='pt-2'>
          <Button type='submit' className='w-full' size='lg'>
            Crear Operación
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default InvestingForm;
