import { createBoard } from '@wixc3/react-board';
import { Complete_Form } from '../../../components/complete-form/complete-form';

export default createBoard({
    name: 'Complete_Form',
    Board: () => <Complete_Form />,
    isSnippet: true,
});
