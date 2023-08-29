import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Bare form',
    Board: () => (
        <div className="formContainer">
            <div className="formHeader"></div>
            <div className="userName"></div>
            <div className="userInfo"></div>
            <div className="checkbox"></div>
            <div className="buttonContainer"></div>
        </div>
    ),

    environmentProps: {
        windowHeight: 700,
        windowWidth: 1000,
        canvasWidth: 108,
    },

    isSnippet: false,
});
