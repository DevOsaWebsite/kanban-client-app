import classNames from 'classnames';
import {twMerge} from 'tailwind-merge';

type ClassDictionary = Record<string, unknown>;
type ClassValue =
  | ClassValue[]
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

export const cn = (...inputs: ClassValue[]): string => {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const className = classNames(inputs);

  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return twMerge(className);
};
