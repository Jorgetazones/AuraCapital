interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-sm ${className}`}
    >
      {title && (
        <h3 className='text-gray-400 text-sm font-medium mb-4'>{title}</h3>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
