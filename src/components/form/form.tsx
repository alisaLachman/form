import classNames from 'classnames';
import styles from './form.module.scss';
import { Input } from '../../components/input/input';
import { Checkbox } from '../../components/checkbox/checkbox';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Button } from '../../components/button/button';
import { Header } from '../../components/header/header';

export interface FormProps {
    className?: string;
}

export const Form = ({ className }: FormProps) => {
    return (
        <div className="formContainer">
            <div className="formHeader">
                <Header userNumber={100} userNumbertext="hundred" />
            </div>
            <div className="userName">
                <Input color="yellow" title="Name" />
                <Input color="yellow" title="phone Number" />
            </div>
            <div className="userInfo">
                <Input color="yellow" title="phone Number" />
                <Input color="yellow" title="Email" />
                <Dropdown color="yellow" title={'Gender'} selection={'Select your gender'} />
            </div>
            <div className="checkbox">
                <Checkbox />
            </div>
            <div className="buttonContainer">
                <Button state="secondery" title={'Cancle'} />
                <Button state="primary" title={'Submit'} />
            </div>
        </div>
    );
};
