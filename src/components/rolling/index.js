import React, {Component} from 'react';
import { getBlock } from '@/api';
import "./index.scss";

// inputData转换
function hex2uft8(str) {
    let temp = '';
    try {
      temp = decodeURIComponent(str.replace(/\s+/g, '').replace(/[0-9a-f]{2}/g, '%$&'));
    } catch (err) {
      for (let b = 0; b < str.length; b += 2) {
        temp += String.fromCharCode(parseInt(str.substr(b, 2), 16));
      }
    }
    console.log(temp)
    return temp;
  }
export default class Rolling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diamondArr: [1102, 1103, 1104, 1105, 1106],
        };
    }

    componentDidMount() {
        this.changeArr()
    }

    changeArr = () => {
        // const {diamondArr} = this.state;
        // let arr = [];
        // diamondArr.map((v) => {
        //     arr.push(v + 1)
        // })
        // this.setState({diamondArr: arr})
        getBlock().then(res => {
            let latestBlock = res.data.latestBlock;
            const arr = [latestBlock-4, latestBlock-3, latestBlock-2, latestBlock -1, latestBlock];
            arr.map((v, k) => {
            $(`.font-num${k}`).html(v)
            $(`.box-num${k}`).attr('block',v);
            $(`.box-num${k}`).click(() => {
                let block = $(`.box-num${k}`).attr('block')
                window.open(`http://themiscan.io/explorer_detail/${block}`)
            })
            })
        });
        
        setTimeout(() => {
            this.changeArr();
        }, 10000)
    }

    render() {
        // let latestBlock = this.props.latestBlock;
        let latestBlock = 1234;
        const arr = [latestBlock-4, latestBlock-3, latestBlock-2, latestBlock -1, latestBlock]
        return (
            <div className='right_content'>
                <div className='right_border'>
                    <div className='right_container'>
                        <div className="right_box">
                            <div className='right_text'>
                                <h2>「 智能合约减排公式 」</h2>
                                <h3>车型为 <i>i</i> 的减排量（ <i>y</i> 为车龄）</h3>
                                <p>
                                    <span><i>LE</i><sub><i>i, y</i></sub></span>
                                    <span><i> = </i></span>
                                    <span><i>BE</i><sub><i>i, y</i></sub></span>
                                    <span><i> - </i></span>
                                    <span><i>PE</i><sub><i>i, y</i></sub></span>
                                </p>
                                <ul className='mark_text'>
                                    <li className='right_down'>
                                        <img src='../../assets/img/icon_down.png' alt='icon'/>
                                        <h4>基准线排放量</h4>
                                    </li>
                                    <li className='right_down2'>
                                        <img className='img_down' src='../../assets/img/icon_down.png' alt='icon'/>
                                        <h4>电动车排放量</h4>
                                    </li>
                                </ul>
                                <div className="clearfloat"></div>
                            </div>
                            <h2>「 区块链 」</h2>
                            <div className="rolling">

                                {
                                    arr.map((v, k) => {
                                        return (
                                            <div className={k === 0 ? 'rolldiv fadeOutDown' : 'rolldiv fadeOut'}
                                                 key={v}>
                                                <div className={`box` + ` box-num${k}`}>
                                                    <a >
                                                        <img src="../../assets/img/box.png" alt=""/>
                                                    </a>
                                                    <div className="box_line"></div>
                                                </div>
                                                <div className={`box_font` + ` font-num${k}`}></div>
                                                <div className="box_text">(区块高度)</div>
                                            </div>
                                        )
                                    }) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


