import classNames from 'classnames';
import styles from './checkbox.module.scss';

export interface CheckboxProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Checkbox = ({ className }: CheckboxProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input type="checkbox" />
            <p>i agree to the terms and conditions</p>
        </div>
    );
};
