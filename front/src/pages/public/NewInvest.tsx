import { useEffect, useState } from 'react';
import InvestingForm from './forms/InvestingForm';
import type { Transaction } from '../../types/Transaction';
import { MOCK_TRANSACTIONS } from '../../data/mocks';
import Loader from './components/Loader';

const NewInvest = () => {
  const [tempList, setTempList] = useState(MOCK_TRANSACTIONS);
  const [loading, setLoading] = useState(true);

  const handleCreate = (newRecord: Transaction) => {
    setTempList((prev) => [newRecord, ...prev]);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className='py-6'>
      <InvestingForm onSubmit={handleCreate} />

      {loading && <Loader />}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Activo</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Comisión</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {tempList.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.assetName}</td>
              <td>{list.type}</td>
              <td>{list.amount}</td>
              <td>{list.price}</td>
              <td>{list.commission}</td>
              <td>{list.totalValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewInvest;
