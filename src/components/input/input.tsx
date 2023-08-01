import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
    title?: string;
}

export const Input = ({ className, color = 'yellow', title }: InputProps) => {
    return (
        <input
            className={classNames(styles.root, { [styles[color]]: color, className, title })}
           title={'ddddddd'} 
        />
    );
};
