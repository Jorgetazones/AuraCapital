import { Button } from './components/Button';
import Card from './components/Card';
import TextInput from './components/TextInput';

export const Home = () => {
  return (
    <main className='container mx-auto px-4'>
      <section className='py-12 border-b border-white/5'>
        <h1 className='text-4xl font-bold text-white'>Resumen de Cartera</h1>
        <p className='text-gray-400 mt-2'>
          Bienvenido de nuevo, Jorge. Así rinden tus activos hoy.
        </p>
        <Button>Iniciar Sesión</Button>
        <TextInput placeholder='Buscar activos...' className='mt-4' />
      </section>

      <section className='py-8'>
        <h2 className='sr-only'>Panel de Control</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card title='Balance Total'>
            <p className='text-3xl font-bold'>$12,450.00</p>
            <span className='text-green-400 text-sm'>+5.2% esta semana</span>
          </Card>

          <Card title='Mercados'>
            <p className='text-gray-300 italic text-sm text-center py-4'>
              [Próximamente: Gráfico de líneas]
            </p>
          </Card>

          <Card title='Activos'>
            <ul className='text-sm space-y-2'>
              <li className='flex justify-between'>
                <span>Bitcoin</span> <span>45%</span>
              </li>
              <li className='flex justify-between'>
                <span>Ethereum</span> <span>30%</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
};
