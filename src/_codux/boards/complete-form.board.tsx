import { createBoard } from '@wixc3/react-board';
import { Input } from '../../components/input/input';
import { Checkbox } from '../../components/checkbox/checkbox';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Button } from '../../components/button/button';
import { Header } from '../../components/header/header';

export default createBoard({
    name: 'Complete form',
    Board: () => (
        <div className="formContainer">
            <div className="formHeader">
                <Header />
            </div>
            <div className="userName">
                <Input color="yellow" title="Name" />
                <Input color="yellow" title="Last Name" />
            </div>
            <div className="userInfo">
                <Input color="yellow" title="phone Number" />
                <Input color="yellow" title="Email" />
                <Dropdown color="yellow" title={'Gender'} selection={'Menu'} />
            </div>
            <div className="checkbox">
                <Checkbox />
            </div>
            <div className="buttonContainer">
                <Button state="secondery" title={'Cancle'} />
                <Button state="primary" title={'Submit'} />
            </div>
        </div>
    ),

    environmentProps: {
        windowHeight: 700,
        windowWidth: 1000,
    },

    isSnippet: false,
});
