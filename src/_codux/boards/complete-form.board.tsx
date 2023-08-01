import { createBoard } from '@wixc3/react-board';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Checkbox } from '../../components/checkbox/checkbox';
import { Dropdown } from '../../components/dropdown/dropdown';

export default createBoard({
    name: 'bare-Form ',
    Board: () => (
        <div className="formContainer">
            <div className="formHeader">
                <h1 className="h1">Heading 1</h1>
                <p className="text">This is a paragraph.</p>
            </div>
            <div className="userName">
                <Input color="yellow" title="Name" />
                <Input color="yellow" title="Last Name" />
            </div>
            <div className="userInfo">
                <Input color="yellow" title="phone Number" />
                <Input color="yellow" title="Email" />
                <Dropdown color="yellow" title={'Gender'} />
            </div>
            <div className="checkbox">
                <Checkbox />
            </div>
            <div className="buttonContainer">
                <Button className="Button" />
            </div>
        </div>
    ),

    environmentProps: {
        windowHeight: 700,
        windowWidth: 1000,
    },
});
