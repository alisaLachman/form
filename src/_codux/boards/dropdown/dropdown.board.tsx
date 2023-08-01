import { createBoard } from '@wixc3/react-board';
import { Dropdown } from '../../../components/dropdown/dropdown';
import Dropdown_module from '../../../components/dropdown/dropdown.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Dropdown',
    Board: () => <Dropdown color="yellow" title={'Gender'} />,
    isSnippet: true,
});
