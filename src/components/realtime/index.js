import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { getVehicle } from '@/api';

import "./index.scss";

const realTimeBg = require('../../assets/img/real-bg.png');
class RealTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '京N1***4',
                    car_type: 'Model X',
                    electricity: '10kWh',
                    total_mile: '1900KM',
                    car_age: '8年',
                    more: '…'
                },
                {
                    id: '京N1***4',
                    car_type: 'Model X',
                    electricity: '10kWh',
                    total_mile: '1900KM',
                    car_age: '8年',
                    more: '…'
                },
                {
                    id: '京N1***4',
                    car_type: 'Model X',
                    electricity: '10kWh',
                    total_mile: '1900km',
                    car_age: '8年',
                    more: '…'
                },
                {
                    id: '京N1***4',
                    car_type: 'Model X',
                    electricity: '10kWh',
                    total_mile: '1900km',
                    car_age: '8年',
                    more: '…'
                },
                {
                    id: '京N1***4',
                    car_type: 'Model X',
                    electricity: '10kWh',
                    total_mile: '1900km',
                    car_age: '8年',
                    more: '…'
                }
            ]
        };
    }
    componentDidMount() {
        this.getListData()
    }
    getListData = () => {
        getVehicle(5, 1).then(res => {
            let data = res.data.vehicles
            this.setState({data})
        });
        setTimeout(() => {
            this.getListData()
        },10000)
    }
    handleRow() {
        
        const arraydata = this.state.data; // 列表数组的数据
        return arraydata && arraydata.map((item, index) => {
          return (
            <tr key={index} className="contentborder">
              <td className="tabletitle">{item.license}</td>
              <td className="tabletitle">{item.model}</td>
              <td className="tabletitle">{ parseInt(item.battery)}kWh</td>
              <td className="tabletitle"> {parseInt(item.odo)}km</td>
              <td className="tabletitle">{item.age}年</td>
              {/* <td className="tabletitle">...</td> */}
            </tr>
          );
        });
      }
    render() {
        return (
            <div className="temi-real-time">
                <div className="real-time-data">
                    <div className="real-wrap">
                        <h4 className="real-time-title">「&nbsp;新能源车联网实时数据&nbsp;」</h4>
                        <table className="tableborder">
                            <thead>
                                <tr className="titlemargin">
                                    <th className="tabletitle">车牌</th>
                                    <th className="tabletitle">车型</th>
                                    <th className="tabletitle">剩余电量</th>
                                    <th className="tabletitle">总里程</th>
                                    <th className="tabletitle">车程</th>
                                    {/* <th className="tabletitle">更多</th> */}
                                </tr>
                            </thead>
                            <tbody className="tbody-content">
                                {this.handleRow()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="roll">
                    <div className="first-wrapper">
                        <div className="first-line1" />
                        <div className="first-line2" />
                        <div className="first-line3" />
                        <span className="first-ball" />
                    </div>
                    <div className="second-wrapper">
                        <div className="second-line" />
                        <span className="second-ball" />
                    </div>
                    <div className="second-line"><span className="second-ball" /></div>
                    <div className="third-wrapper">
                        <div className="third-line1" />
                        <div className="third-line2" />
                        <div className="third-line3" />
                        <span className="third-ball" />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default RealTime;
