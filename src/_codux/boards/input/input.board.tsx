import { createBoard } from '@wixc3/react-board';
import { Input } from '../../../components/input/input';
import Classnames from 'classnames';
import InputTextCover from '../../../assets/InputText.png';

export default createBoard({
    name: 'input text',
    Board: () => <Input color="pink" title="Name" />,
     cover: InputTextCover,
    isSnippet: true,
   
});
