import classNames from 'classnames';
import styles from './checkbox.module.scss';

export interface CheckboxProps {
    className?: string;
    pharagraph?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Checkbox = ({ className, pharagraph }: CheckboxProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input type="checkbox" />
            <p>{0}</p>
        </div>
    );
};
