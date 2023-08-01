import classNames from 'classnames';
import styles from './input-number.module.scss';

export interface InputNumberProps {
    className?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
}


export const InputNumber = ({ className, color = 'yellow',  }: InputNumberProps) => {
    return <input type="number" className={classNames(styles.root, { [styles[color]]: color, className })}/>;

};


