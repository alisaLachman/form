import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import ButtonSeconderyCover from '../../../assets/ButtonSecondery.png';

export default createBoard({
    name: 'Button secondary',
    Board: () => <Button state="secondery" title={'Cancle'} />,
    cover: ButtonSeconderyCover,
    isSnippet: true,
});
