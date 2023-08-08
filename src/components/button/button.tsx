import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    state: 'secondery' | 'primary';
    title: string;
}

export const Button = ({ className, state , title }: ButtonProps) => {
    return (
        <button className={classNames(styles.root, { [styles[state]]: state }, className)}>
            {title}
        </button>
    );
};
