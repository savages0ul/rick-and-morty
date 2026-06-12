import { useEffect, useRef, useState } from 'react';

import { ArrowSelectIcon } from '@/assets/icons';
import { classNames } from '@/helpers';

import styles from './styles.module.scss';
import type { SelectOption } from './types';

interface Props<T> {
  placeholder?: string;
  options: SelectOption<T>[];
  size?: 'large' | 'small';
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T,>({
  placeholder,
  options,
  size = 'large',
  value,
  onChange
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
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

  const handleSelect = (optValue: T) => {
    onChange?.(optValue);
    setIsOpen(false);
  };

  const handleTriggerClick = () => {
    if (!isOpen) setFocusedIndex(-1);
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = options.findIndex((opt) => opt.value === value);
        setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
        setIsOpen(true);
      }
      return;
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0) handleSelect(options[focusedIndex].value);
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={classNames(styles.wrapper, styles[size])}
    >
      <button
        type='button'
        className={styles.trigger}
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
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
          className={classNames(styles.arrow, isOpen && styles.arrowOpen)}
        />
      </button>
      {isOpen && (
        <ul
          role='listbox'
          className={styles.dropdown}
        >
          {options.map((opt, index) => (
            <li
              key={String(opt.value)}
              role='option'
              aria-selected={opt.value === value}
              className={classNames(
                styles.option,
                index === focusedIndex && styles.focused
              )}
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
