import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/beijing.json';
export const Chart6 = () => {
    const divRef = useRef(null);
    const colors = {'海淀区': 'red', '朝阳区': 'orange', '平谷区': 'purple','怀柔区': 'yellow'};
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '海淀区', value: 1},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['海淀区'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '朝阳区', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['朝阳区'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '平谷区', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['平谷区'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },


                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '怀柔区', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['怀柔区'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered 籍贯">
            <h2>犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                <div className="legend bordered">
                    <span className="icon" style={{background: colors['海淀区']}}/>A籍
                    <span className="icon" style={{background: colors['朝阳区']}}/>B籍
                    <span className="icon" style={{background: colors['平谷区']}}/>C籍
                    <span className="icon" style={{background: colors['怀柔区']}}/>D籍
                </div>
                <div className="notes">北京市行政区域图</div>
            </div>
        </div>
    );
};

