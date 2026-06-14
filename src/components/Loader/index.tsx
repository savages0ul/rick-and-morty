import PortalBigIcon from '@/assets/images/portal-big.svg?react';
import PortalIcon from '@/assets/images/portal.svg?react';
import { classNames } from '@/helpers';

import styles from './styles.module.scss';

interface Props {
  size?: 'small' | 'large';
  caption?: string;
  className?: string;
}

const PortalBySize = {
  small: PortalIcon,
  large: PortalBigIcon
};

export const Loader = ({ size = 'large', caption, className }: Props) => {
  const Portal = PortalBySize[size];

  return (
    <div className={classNames(styles.loader, styles[size], className)}>
      <Portal className={styles.portal} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};
