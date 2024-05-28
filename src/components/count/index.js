import React, {Component} from 'react';
import { getIncrease } from '@/api';
import CountUp from 'react-countup';
import "./index.scss";

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: parseFloat(localStorage.start),
            end: parseFloat(localStorage.end) || 143,
            increased: 0.01,
            online: 4800
        }
    }

    componentDidMount() {
        this.countUpDate()
        this.onlineChange()
    }

    onlineChange = () => {
        const { online } = this.state;
        var random = Math.floor(Math.random()*(5013-4801)+4800);
        this.setState({online:random})
        setTimeout( () => {
            this.onlineChange()
        },10000)
    }
    
    //数据上涨
    countUpDate = () => {
        const {end, increased} = this.state;
        this.setState({end: end + parseFloat(this.props.increase), start: end, increased: this.props.increase}, () => {
            localStorage.end = this.state.end;
            localStorage.start = this.state.start;
        })
        setTimeout(() => {
            this.countUpDate();
        }, 10000)
    }

    render() {
        const {start, end, increased} = this.state
        return (
            <div className='data_count'>

                <div className="count_content">
                    <h2 className="fontName">累计减排量</h2>
                    <div className="count">
                        <CountUp
                            start={start}
                            end={end}
                            duration={3}
                            separator=","
                            decimals={3} //小数位数
                            decimal="."
                        />
                        <p className="count_T" >t</p>
                    </div>
                </div>
                <div className='datashow'>
                    <span>车辆数据更新周期</span>
                    <span>10S</span>
                    <span>已上链/在线车辆数</span>
                    <span>5013/{this.state.online}</span>
                    <span>新增减排量</span>
                    <span>{increased}t</span>
                    <span>实时区块高度</span>
                    <span>{this.props.latestBlock}</span>
                </div>
            </div>
        )
    }
}

