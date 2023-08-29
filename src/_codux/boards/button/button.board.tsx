import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import ButtonPrimaryCover from '../../../assets/ButtonPrimary.png';

export default createBoard({
    name: 'Button primary',
    Board: () => <Button state="primary" title={'Submit'} />,
    cover: ButtonPrimaryCover,
    isSnippet: true,
});


