import styles from './TheHeader.module.scss';
import {ThemeSwitcher} from "../ThemeSwitcher";

export const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
        devFinder
    </div>
      <ThemeSwitcher />
  </div>
);
