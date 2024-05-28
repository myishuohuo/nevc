import React, {Component} from 'react';
import Count from '@/components/count';
import RealTime from '@/components/realtime'
import Rolling from '@/components/rolling';
import { getTotal, getIncrease, getBlock } from '@/api';
import subscribeToTimer from '@/api/socket';
import "./index.scss";

export default class Cubic extends Component {
    constructor(props) {
        super(props);
        // subscribeToTimer((err, timestamp) => this.setState({
        //     timestamp
        //   }));
        this.state = {
            dataArr:[0.011, 0.012, 0.013,0.014],
            increase:0.001,
            latestBlock:'',
            // timestamp: 'no timestamp yet'
        };
    }
    componentDidMount() {
        this.dataChange()
        this.increase()
        this.blockHeight()
    }
    //increase 
    increase = () => {
        getIncrease().then(res => {
            let increase = (res.data.increase).toFixed(3);
            this.setState({increase})
        });
        setTimeout(() => {
            this.increase()
        },3000)
    }
    //getBlock 
    blockHeight = () => {
        getBlock().then(res => {
            // console.log('数据');
            // console.log(res);
            let latestBlock = res.data.latestBlock;
            this.setState({latestBlock})
        });
        setTimeout(() => {
            this.blockHeight()
        },10000)
    }
    dataChange = () => {
        const { dataArr, increase } = this.state
        dataArr.splice(0,1);
        dataArr.push( parseFloat(increase).toFixed(3) )
        this.setState({dataArr })
        setTimeout(() => {
            this.dataChange();
        },10000)
    }
    render() {
        const { dataArr, increase, latestBlock } = this.state
        return (
            <div className={"module"}>
            {/* <h1 className="title">This is the timer value: {this.state.timestamp}</h1> */}
                <div className="title">
                    "清洁碳链"工程
                    <p className="title_low">构建城市移动绿网</p>
                </div>
                <img className="img_logo" src="../../assets/img/logo.png" alt=""/>
                <div className="map">
                    {
                        dataArr.map((v, k) => {
                            return (
                                <p key={k} id={"number"+k} className={k === 0 ? 'haorooms-dot': 'haorooms-up fadeUp'} data-before={v} ></p>
                            )
                        })
                    }

                </div>
                <div className={"city"}>
                    <img src="../../assets/img/rotate.png" alt="1"/>
                    <div className={"radius"}></div>
                    <p>北京</p>
                </div>
                <img className={"map-line"} src="../../assets/img/line.png" alt="1"/>
                <img className={"map-exchange"} src="../../assets/img/exchange.png" alt="1" width={"129px"}/>
                <Count increase={increase} latestBlock={latestBlock}/>
                <div>
                    <div className="left"><RealTime /></div>
                    <div className="right"><Rolling latestBlock={latestBlock}/></div>
                </div>
            </div>
        )
    }
}

