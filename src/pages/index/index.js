import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map from '@/components/map';
import "./index.scss";


class Propaganda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="temi-page">
                <div className="bg"></div>
                <Map/>
                {/* <Count/>
                <div>
                    <div className="left"><RealTime /></div>
                    <div className="right"><Rolling /></div>
                </div> */}
            </div>
        )
    }
}


ReactDOM.render(
    <Propaganda/>,
    document.getElementById('temi-page')
);

