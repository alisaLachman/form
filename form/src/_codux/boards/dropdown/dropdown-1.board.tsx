import { createBoard } from '@wixc3/react-board';
import { Dropdown } from '../../../../../src/components/dropdown/dropdown';
import Dropdown_module from '../../../../../src/components/dropdown/dropdown.module.scss';
import Classnames from 'classnames';
import DropDownPinkCover from '../../../../../src/assets/DropDownPink.png';

export default createBoard({
    name: 'Dropdown  Pink',
    Board: () => <Dropdown color="pink" title={'Gender'} selection={'man'} />,
    cover: DropDownPinkCover,
    isSnippet: true,
   
});
