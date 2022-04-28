import React from 'react';

export const Chart14 = () => {
    return (
        <table>
            <thead>
            <tr>
                <th colSpan={2}>类型</th>
                <th>单数</th>
                <th>总计</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowSpan={3}>盗窃</td>
                <td>翻窗</td>
                <td>10</td>
                <td rowSpan={3}>48</td>
            </tr>
            <tr>
                <td>撬门</td>
                <td>18</td>
            </tr>
            <tr>
                <td>开锁</td>
                <td>20</td>
            </tr>

            <tr>
                <td rowSpan={2}>抢夺</td>
                <td>拦路</td>
                <td>10</td>
                <td rowSpan={2}>35</td>
            </tr>
            <tr>
                <td>徒手</td>
                <td>25</td>
            </tr>
            <tr>
                <td rowSpan={4}>扒窃</td>
                <td>市场</td>
                <td>30</td>
                <td rowSpan={4}>90</td>
            </tr>
            <tr>
                <td>地铁</td>
                <td>40</td>
            </tr>
            <tr>
                <td>餐厅</td>
                <td>20</td>
            </tr>
            </tbody>
        </table>
    );
};