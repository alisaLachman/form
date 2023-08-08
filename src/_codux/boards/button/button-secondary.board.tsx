import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Button secondary',
    Board: () => <Button state="secondery" title={'Cancle'} />,
    isSnippet: true,
});
