import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data=[
        0.15, 0.13, 0.11,
        0.13, 0.10, 0.12,
        0.11, 0.13, 0.16,
        0.19, 0.16, 0.14,
        0.12
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                Math.random()/5, 
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
                Math.random()/5,
            ];
            x(newData);
        }, 5000);
    }, []);

        
      const x= (data)=>{ 
        myChart.current.setOption(createEchartsOptions({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            yAxis: {
                type: 'value',
                splitLine: {lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    }
                }
            },
            series: [{
                type: 'line',
                data: data,
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: {width: px(2)},
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#414a9f'
                    }, {
                        offset: 1,
                        color: '#1b1d52'
                    }]),
                }
            }]
        }));
    };

    useEffect(() => {
         myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);
    return (
        <div className="bordered 案发时段">
            <h2>案发时段分析</h2>
            <div ref={divRef} className="chart"/>
        </div>
    );
};