/**
 * @file Calculation.js
 */

import React from 'react';
import {useModel} from 'react-vivy';

const wrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    transform: 'translate(-50%, -50%)',
    fontSize: 24,
    lineHeight: '64px'
};

const rowStyle = {
    display: 'flex',
    justifyItems: 'flex-end',
    alignItems: 'center'
};

const inputStyle = {
    boxSizing: 'border-box',
    width: 160,
    height: 64,
    padding: 8,
    border: '1px solid #ccc',
    borderRadius: 8,
    margin: '8px 0 8px 16px',
    textAlign: 'right',
    fontSize: 24
};

const hrStyle = {
    width: '100%'
};

const Calculation = () => {

    /**
     * Get state and reducer from model "calculation" using hook "useModel".
     */
    const [calculationState, calculationActions] = useModel('calculation');
    const {value1, value2} = calculationState;
    const {updateValue1, updateValue2} = calculationActions;

    return (
        <div style={wrapperStyle}>
            <div style={rowStyle}>
                <input style={inputStyle}
                       value={value1}
                       onChange={e => updateValue1?.({
                           value: +e?.target?.value
                       })}/>
            </div>
            <div style={rowStyle}>
                +
                <input style={inputStyle}
                       value={value2}
                       onChange={e => updateValue2?.({
                           value: +e?.target?.value
                       })}/>
            </div>
            <hr style={hrStyle}/>
            <div className="row">
                {value1 + value2}
            </div>
        </div>
    );

};

export default Calculation;
