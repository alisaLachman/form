import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
    title: 'Name' | 'Last Name' | 'Email' | 'phone Number';
}


export const Input = ({ className, color, title }: InputProps) => {
    return (
        <label className={styles.label} style={{ fontSize: '23px', lineHeight: '40px' }}>
            {title}
            <input className={classNames(styles.root, { [styles[color]]: color, className })} />
        </label>
    );
};
