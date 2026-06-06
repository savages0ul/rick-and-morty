import { classNames } from '@/helpers/classNames';
import type { CharacterStatus } from '@/types/character';

import styles from './styles.module.scss';

interface Props {
  status: CharacterStatus;
}

export const StatusDot = ({ status }: Props) => (
  <span className={classNames(styles.dot, styles[status])} />
);
