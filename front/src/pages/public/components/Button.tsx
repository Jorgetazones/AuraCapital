import type React from 'react';
import { cn } from '../../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority'; // Añade VariantProps

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-aura-gold text-black hover:brightness-110',
        secondary:
          'bg-apple-card text-apple-white border border-white/10 hover:bg-white/5',
        ghost:
          'bg-transparent text-apple-grey hover:text-apple-white hover:bg-white/5',
        outline:
          'bg-transparent border border-aura-gold text-aura-gold hover:bg-aura-gold/10',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-14 px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  icon,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {children}
    </button>
  );
};
