import classNames from 'classnames';
import styles from './input-number.module.scss';

export interface InputNumberProps {
    className?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
    title?: 'Day' | 'Month' | 'Year' ;
}


export const InputNumber = ({ className, color = 'yellow', title }: InputNumberProps) => {
    return (
    <label className={styles.label}>{title}
    <input type="number" className={classNames(styles.root, { [styles[color]]: color, className })}/>
    </label>
    );

};


