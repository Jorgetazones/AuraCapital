import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
const textInputVariants = cva(
  'w-full rounded-xl border border-white/10 bg-[#1C1C1E] px-4 py-3 text-sm text-white transition-all placeholder:text-[#48484A] focus:outline-none focus:ring-1 focus:ring-aura-gold focus:border-aura-gold/50 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        error: 'border-red-500/50 focus:ring-red-500',
        success: 'border-green-500/50 focus:ring-green-500',
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
