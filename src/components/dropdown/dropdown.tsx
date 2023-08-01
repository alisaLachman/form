import classNames from 'classnames';
import styles from './dropdown.module.scss';

export interface DropdownProps {
    className?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
}

export const Dropdown = ({ className, color = 'yellow' }: DropdownProps) => {
    return (

        <select className={classNames(styles.root, { [styles[color]]: color, className})}>
            <option>Man</option>
            <option>Women</option>
            <option>Other</option>
        </select>
    );
};
