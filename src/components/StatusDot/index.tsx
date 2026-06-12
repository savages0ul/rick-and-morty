import { classNames } from '@/helpers';
import type { CharacterStatus } from '@/types';

import styles from './styles.module.scss';

interface Props {
  status: CharacterStatus;
}

export const StatusDot = ({ status }: Props) => (
  <span className={classNames(styles.dot, styles[status])} />
);
