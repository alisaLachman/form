import { createBoard } from '@wixc3/react-board';
import { InputNumber } from '../../../components/input-number/input-number';
import { InputNumber_module } from '../../../components/input-number/input-number.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'InputNumber',
    Board: () => <InputNumber />
});
