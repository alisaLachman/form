import { createBoard } from '@wixc3/react-board';
import { InputNumber } from '../../../components/input-number/input-number';
import Classnames from 'classnames';

export default createBoard({
    name: 'InputNumber',
    Board: () => <InputNumber color="yellow" title="Month" />,
});
