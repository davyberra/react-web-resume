import ReactDOM from 'react-dom';
import React from 'react';

//function tick() {
//    const element = (
//        <div>
//            <h1>Hello, Davy!</h1>
//            <h2>It is {new Date().toLocaleTimeString()}.</h2>
//        </div>
//    );
//    ReactDOM.render(element, document.getElementById('root'));
//}

//setInterval(tick, 1000);

//function Welcome(props) {
//    return <h1>Welcome, {props.name}.</h1>;
//}

//function Avatar(props) {
//    return (
//        )
//}

//    <comment userinfo-name="Davy" />,
//    document.getElementById('root')
//);

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <div className="UserInfo-name">
                <strong>{props.name} says...</strong>
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo name={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
        </div>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock name="Davy" />,
    document.getElementById('root')
);
