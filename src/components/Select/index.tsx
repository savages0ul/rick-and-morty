import { useEffect, useRef, useState } from 'react';

import ArrowSelectIcon from '../../assets/icons/arrowSelect.svg?react';
import styles from './styles.module.scss';
import type { SelectOption } from './types';

interface Props {
  placeholder?: string;
  options?: SelectOption[];
  size?: 'large' | 'small';
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = ({
  placeholder,
  options = [],
  size = 'large',
  value,
  onChange
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((opt) => opt.value === value);

  const handleSelect = (optValue: string) => {
    onChange?.(optValue);
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${styles[size]}`}
    >
      <button
        type='button'
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.triggerContent}>
          {selected ? (
            <>
              <span className={styles.value}>{selected.label}</span>
              {selected.icon && (
                <span className={styles.icon}>{selected.icon}</span>
              )}
            </>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </span>
        <ArrowSelectIcon
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
        />
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={styles.option}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
              {opt.icon && <span className={styles.icon}>{opt.icon}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
