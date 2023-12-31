import { createBoard } from '@wixc3/react-board';
import { Dropdown } from '../../../components/dropdown/dropdown';
import Dropdown_module from '../../../components/dropdown/dropdown.module.scss';
import Classnames from 'classnames';
import TextInputCover from '../../../assets/TextInput.png';

export default createBoard({
    name: 'Dropdown Yellow',
    Board: () => <Dropdown color="yellow" title={'Gender'} selection={'man'} />,
    cover: TextInputCover,
    isSnippet: true,
});
