import type { ReactNode } from 'react';

export interface SelectOption<T = string> {
  value: T;
  label: string;
  icon?: ReactNode;
}
