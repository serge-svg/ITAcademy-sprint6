import { Button } from './Button.jsx';

const Welcome = (props) => {
    return (
        <div>
            <h2>Welcome</h2>
            <Button onClick={props.init}>Start</Button>    
        </div>
    );
};

export default Welcome;
