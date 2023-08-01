import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
    title?: 'Name' | 'Last Name' | 'Email' | 'phone Number';
}

export const Input = ({ className, color = 'yellow', title }: InputProps) => {
    return (
       
            <label className={styles.label}>{title}
            <input className={classNames(styles.root, { [styles[color]]: color, className })} />
       </label>
    );
};
