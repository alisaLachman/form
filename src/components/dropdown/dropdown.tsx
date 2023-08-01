import classNames from 'classnames';
import styles from './dropdown.module.scss';

export interface DropdownProps {
    className?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
    title: string;
}

export const Dropdown = ({ className, color, title }: DropdownProps) => {
    return (
<label className={styles.label}>{title}
        <select className={classNames(styles.root, { [styles[color]]: color, className})}>
            <option>Man</option>
            <option>Women</option>
            <option>Other</option>
        </select>
        </label>
    );
};
