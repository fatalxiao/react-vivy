/**
 * @file Calculation.js
 */

import React from 'react';
import {useModel} from 'react-vivy';

const wrapperStyle = {
    display: 'flex',
    width: 200,
    flexDirection: 'column',
    alignItems: 'flex-end'
};

const inputStyle = {
    padding: 8,
    margin: 8,
    textAlign: 'right'
};

const hrStyle = {
    width: '100%'
};

const Calculation = () => {

    /**
     * Get state and reducer from model "calculation" using hook "useModel".
     */
    const {value1, value2, updateValue1, updateValue2} = useModel('calculation');

    console.log('value1::', value1);
    console.log('value2::', value2);

    return (
        <div style={wrapperStyle}>
            <div>
                <input style={inputStyle}
                       value={value1}
                       onChange={e => updateValue1?.({
                           value: +e?.target?.value
                       })}/>
            </div>
            <div>
                +
                <input style={inputStyle}
                       value={value2}
                       onChange={e => updateValue2?.({
                           value: +e?.target?.value
                       })}/>
            </div>
            <hr style={hrStyle}/>
            {value1 + value2}
        </div>
    );

};

export default Calculation;
