import ClearIcon from '../../assets/icons/clear.svg?react';
import SearchIcon from '../../assets/icons/search.svg?react';
import { cn } from '../../helpers/cn';
import styles from './styles.module.scss';

interface Props {
  variant?: 'bordered' | 'underlined';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextField = ({
  variant = 'bordered',
  value,
  onChange,
  placeholder
}: Props) => {
  return (
    <div className={cn(styles.wrapper, styles[variant])}>
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
          <ClearIcon />
        </button>
      )}
    </div>
  );
};
