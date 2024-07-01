import classNames from 'classnames';
import styles from './header.module.scss';

const userNumbertext = "Two Hundred";

export interface HeaderProps {
    className?: string;
    userNumber?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.header}>Create your account</h1>
            <span>You are user number </span>
            <span className={styles.userNumber}>10</span>
        </div>
    );
};
