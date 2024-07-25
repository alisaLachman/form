import { createBoard } from '@wixc3/react-board';
import { Checkbox } from '../../../components/checkbox/checkbox';
import CheckBoxCover from '../../../assets/CheckBox.png';

export default createBoard({
    name: 'Checkbox',
    Board: () => <Checkbox pharagraph={10000} />,
    cover: CheckBoxCover,
    isSnippet: true,
});
