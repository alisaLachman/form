import { createBoard } from '@wixc3/react-board';
import { Input } from '../../../components/input/input';
import Input_module from '../../../components/input/input.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'input text',
    Board: () => <Input color="yellow" title={'ddddddd'} />,
});
