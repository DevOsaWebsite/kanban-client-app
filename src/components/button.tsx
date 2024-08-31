import {cn} from '@/utils/classnames';
import {cva, type VariantProps} from 'class-variance-authority';
import {createElement, forwardRef, type HTMLAttributes} from 'react';

const variantProps = cva('button min-w-64 font-bold', {
  variants: {
    color: {
      primary:
        'bg-primary text-primary-on hover:bg-primary-light focus:bg-primary-light focus-visible:bg-primary-light focus-within:bg-primary-light',
      secondary:
        'bg-primary/10 text-primary hover:bg-primary/25 focus:bg-primary/25 focus-visible:bg-primary/25 focus-within:bg-primary/25',
      error:
        'bg-error  text-error-on hover:bg-error-light focus:bg-error-light focus-visible:bg-error-light focus-within:bg-error-light',
    },
    size: {
      lg: 'px-4 py-4 text-xs rounded-3xl',
      md: 'px-4 py-2 text-xs/6 rounded-[20px]',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

type ButtonProps = {} & HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variantProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {className, color, size, ...rest} = props;

  return createElement('button', {
    className: cn(variantProps({color, size}), className),
    ref,
    ...rest,
  });
});

Button.displayName = 'Button';

export {Button};
