import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'bare-Form ',
    Board: () => <div className="formContainer"></div>,

    environmentProps: {
        windowHeight: 700,
        windowWidth: 1000,
    },
});
