import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
const textInputVariants = cva(
  'w-full rounded-md border border-white/10 bg-apple-card px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-aura-gold focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-white/10 focus:border-aura-gold/50',
        error: 'border-red-500 focus:ring-red-500 text-red-500',
        success: 'border-green-500 focus:ring-green-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextInputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputVariants> {
  label?: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, variant, className, ...props }, ref) => {
    return (
      <div className='relative'>
        {label && (
          <label className='text-sm font-medium text-apple-grey ml-1'>
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={cn(textInputVariants({ variant }), className)}
          {...props}
        />

        {error && (
          <p className='text-xs text-red-500 ml-1 mt-1 font-medium italic'>
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default TextInput;
