import classNames from 'classnames';
import styles from './complete-form.module.scss';
import { Dropdown } from '../dropdown/dropdown';

export interface Complete_FormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Complete_Form = ({ className }: Complete_FormProps) => {
    return <div className={classNames(styles.root, className)}>
        <Dropdown color="pink" title={'Gender'} selection={'man'} />
        <Dropdown color="yellow" title={'Gender'} selection={'man'} />
    </div>;
};
