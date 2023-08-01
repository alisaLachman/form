import { createBoard } from '@wixc3/react-board';
import { Checkbox } from '../../../components/checkbox/checkbox';

export default createBoard({
    name: 'Checkbox',
    Board: () => <Checkbox />,
    isSnippet: true,
});
