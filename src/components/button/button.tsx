import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    primary:boolean;
}

export const Button = ({ className, primary=true }: ButtonProps) => {
    return (
        <button className={classNames(styles.root,{[styles.secondery]: !primary},className)}>
        Submit </button>
    )
};


