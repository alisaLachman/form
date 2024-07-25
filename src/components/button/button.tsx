import classNames from 'classnames';
import styles from './button.module.scss';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    state: 'secondery' | 'primary';
    title: string;
}

export const Button = ({ className, state , title, ...props}: ButtonProps) => {

    const myDisabled = true;

    // if (disabled === true) {
    //     return <div/>
    // }
    return (
        <button {...props} className={classNames(styles.root, { [styles[state]]: state }, className)} disabled={myDisabled} style={{}}>
            {title}
        </button>
    );
};
