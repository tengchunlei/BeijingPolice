import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
export const Chart8 = () => {
    const divRef = useRef(null);
    const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            color: colors,
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {show: false},
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['75%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
                        formatter(options) {
                            return (options.value * 100).toFixed(0) + '%';
                        }
                    },
                    labelLine: {show: false},
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                    data: [
                        {value: 0.3, name: '10-30'},
                        {value: 0.5, name: '31-50'},
                        {value: 0.2, name: '51-70'},
                    ]
                }
            ]
        }));

        var myChart = echarts.init(divRef.current);
    }, []);

    return (
        <div className="年龄段-图2">
            <div className="chart">
                <div className="main" ref={divRef}/>
                <div className="text">年龄段</div>
            </div>
            <div className="legend">
                <span style={{background: colors[0]}} />10-30
                <span style={{background: colors[1]}} />31-50
                <span style={{background: colors[2]}} />51-70
            </div>
        </div>
    );
};