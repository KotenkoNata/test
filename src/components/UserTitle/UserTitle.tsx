import styles from './UserTitle.module.scss';
import {LocalGithubUser} from "../../types";

interface UserTitleProps extends Pick<
    LocalGithubUser,
    'name' | 'login' | 'created'
>{}

export const UserTitle = ({ created, login, name}: UserTitleProps) => (
  <div className={styles.userTitle}>

  </div>
);
