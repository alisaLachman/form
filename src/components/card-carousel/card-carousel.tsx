import classNames from 'classnames';
import styles from './card-carousel.module.scss';

export interface Card_CarouselProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Card_Carousel = ({ className }: Card_CarouselProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
