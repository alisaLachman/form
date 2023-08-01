import { createBoard } from '@wixc3/react-board';
import { Input } from '../../../components/input/input';
import Classnames from 'classnames';

export default createBoard({
    name: 'input text',
    Board: () => <Input color="yellow" title="phone Number" />,
    isSnippet: true,
});
