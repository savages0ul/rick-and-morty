import clsx from 'clsx';

import styles from './styles.module.scss';
import type { Status } from './types';

interface Props {
  status: Status;
}

export const StatusDot = ({ status }: Props) => (
  <span className={clsx(styles.dot, styles[status])} />
);
