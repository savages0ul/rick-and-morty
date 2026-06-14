import { CloseIcon, SearchIcon } from '@/assets/icons';
import { classNames } from '@/helpers';

import styles from './styles.module.scss';

interface Props {
  variant?: 'bordered' | 'underlined';
  size?: 'large' | 'small';
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextField = ({
  variant = 'bordered',
  size = 'large',
  className,
  value,
  onChange,
  placeholder
}: Props) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        styles[variant],
        styles[size],
        className
      )}
    >
      {variant === 'bordered' && <SearchIcon className={styles.icon} />}
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      {value && (
        <button
          className={styles.clearButton}
          onClick={() => onChange('')}
          type='button'
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
