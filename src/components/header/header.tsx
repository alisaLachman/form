import classNames from 'classnames';
import styles from './header.module.scss';


export interface HeaderProps {
    className?: string;
    userNumber?: number;
    userNumbertext?: string;
}


export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.header}>Create your account</h1>
            <span>You are user number </span>
            <span className={styles.userNumber}>10</span>
        </div>
    );
};
