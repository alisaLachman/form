import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';
import HeadingCover from '../../../assets/Heading.png';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    cover:HeadingCover,
    isSnippet: true,
   
});


