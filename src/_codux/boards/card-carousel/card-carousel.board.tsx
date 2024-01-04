import { createBoard } from '@wixc3/react-board';
import { Card_Carousel } from '../../../components/card-carousel/card-carousel';

export default createBoard({
    name: 'Card_Carousel',
    Board: () => <Card_Carousel />,
    isSnippet: true,
});
