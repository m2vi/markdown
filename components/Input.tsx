import { forwardRef } from 'react';
import { IoSearchOutline, IoSearch } from 'react-icons/io5';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  textarea?: boolean;
  rows?: number;
  error?: string;
  transparent?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-primary-700`;
    const ring = error ? `ring-1 ring-secondary` : 'border-0';
    const cn = ` py-2 px-4 rounded-8 text-primary-100 placeholder-primary-300 ${bg} ${ring} ${className} `;

    return textarea ? (
      <textarea
        ref={ref as any}
        className={cn}
        {...(props as any)}
        data-testid='textarea'
      />
    ) : (
      <input ref={ref} className={cn} {...props} data-testid='input' />
    );
  }
);

Input.displayName = 'Input';

export const BlankInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const cn = ` p-0 rounded-0 text-primary-100 placeholder-primary-100 bg-transparent border-0 ${className} `;

    return <input ref={ref} className={cn} {...props} data-testid='input' />;
  }
);

BlankInput.displayName = 'Input';
