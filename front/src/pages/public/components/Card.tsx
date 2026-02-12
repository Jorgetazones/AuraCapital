import { cn } from '../../../lib/utils';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-[#353535] border border-white/5 rounded-[2.5rem] p-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
