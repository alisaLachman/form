import { createBoard } from '@wixc3/react-board';
import { InputNumber } from '../../../components/input-number/input-number';
import Classnames from 'classnames';
import InputNumberCover from '../../../assets/InputNumber.png';

export default createBoard({
    name: 'InputNumber',
    Board: () => <InputNumber color="yellow" title="Month" />,
    cover: InputNumberCover,
    isSnippet: true,
});
