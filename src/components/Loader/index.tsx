import PortalBigIcon from '@/assets/images/portal-big.svg?react';
import PortalIcon from '@/assets/images/portal.svg?react';
import { classNames } from '@/helpers/classNames';

import styles from './styles.module.scss';

interface Props {
  size?: 'small' | 'large';
  caption?: string;
}

const PortalBySize = {
  small: PortalIcon,
  large: PortalBigIcon
};

export const Loader = ({ size = 'large', caption }: Props) => {
  const Portal = PortalBySize[size];

  return (
    <div className={classNames(styles.loader, styles[size])}>
      <Portal className={styles.portal} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};
