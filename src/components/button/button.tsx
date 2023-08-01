import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    state: 'secondery' | 'primary';
}

export const Button = ({ className, state }: ButtonProps) => {
    return (
        <button className={classNames(styles.root, { [styles[state]]: state }, className)}>
            Submit{' '}
        </button>
    );
};
