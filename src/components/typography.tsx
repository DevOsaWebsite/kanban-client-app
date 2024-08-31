import {cn} from '@/utils/classnames';
import {cva, type VariantProps} from 'class-variance-authority';
import {
  createElement,
  forwardRef,
  type ElementType,
  type HTMLAttributes,
} from 'react';

const variantProps = cva('typography', {
  variants: {
    variant: {
      headingXl: 'text-2xl font-bold',
      headingLg: 'text-lg/6 font-bold',
      headingMd: 'text-[15px]/5 font-bold',
      headingSm: 'text-xs font-bold tracking-[0.2em]',
      bodyLg: 'text-[13px]/6',
      body: 'text-xs/4 font-bold',
      inherit: 'text-inherit',
    },
    color: {
      default: 'text-background-on',
      paper: 'text-background-on-paper',
      primary: 'text-primary',
      inherit: 'text-inherit',
      error: 'text-error',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
  },
});

type TypographyProps = {
  component?: ElementType;
} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof variantProps>;

const Typography = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const {
    children,
    component = 'span',
    className,
    variant,
    color,
    ...rest
  } = props;

  return createElement(
    component,
    {
      className: cn(
        variantProps({
          variant,
          color,
        }),
        className,
      ),
      ref,
      ...rest,
    },
    children,
  );
});
Typography.displayName = 'Typography';

export {Typography, type TypographyProps};
