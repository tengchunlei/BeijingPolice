import React, {useEffect, useRef} from 'react';
import * as echarts from  'echarts';
import {px} from '../shared/px'
import {baseEchartOptions} from "../shared/base-echart-options";
export const Chart1 = ()=> {
    const divRef = useRef(null)
    useEffect(()=>{
        var myChart = echarts.init(divRef.current);
        var option = {
            ...baseEchartOptions,
            xAxis: {
                data: ['东城区', '西城区', '朝阳区', '丰台区', '石景山区', '海淀区', '顺义区', '通州区','大兴区'],
                axisTick:{show:false},
                axisLabel:{
                    fontSize:px(12),
                    formatter(val){
                        if(val.length > 2){
                            const array =val.split('');
                            array.splice(2,0,'\n');
                            return array.join('');
                        }else{
                            return val;
                        }

                    }
                },

            },

            yAxis: {
                show:true,
                splitLine:{show:false},
                axisLine:{
                    show:true,
                    lineStyle:{color:'#083B70'}
                },
                axisLabel:{
                    fontSize:px(12)
                }
            },
            series: [
                {
                    type: 'bar',
                    data: [26, 20, 36, 10, 10, 20,25,18,16]
                }
            ]
        };
        myChart.setOption(option);
    },[])

    return(
    <div className="bordered 案发派出所管辖统计">
        <h2>案发派出所管辖统计</h2>
        <div ref={divRef} className="chart"></div>
    </div>
);

}





