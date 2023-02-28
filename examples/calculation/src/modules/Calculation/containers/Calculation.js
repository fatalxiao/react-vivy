/**
 * @file Calculation.js
 */

import React, {useCallback} from 'react';
import {useModel} from 'react-vivy';

// Styles
import './Calculation.scss';

const Calculation = () => {

    /**
     * Get state and reducer from model "calculation" using hook "useModel".
     */
    const [calculationState, calculationActions] = useModel('calculation');
    const {value1, value2} = calculationState;
    const {updateValue1, updateValue2} = calculationActions;

    /**
     * Update value1 to model
     * @type {(function(*): void)|*}
     */
    const handleValue1Change = useCallback(e => {
        updateValue1?.({
            value: +e?.target?.value
        });
    }, [
        updateValue1
    ]);

    /**
     * Update value2 to model
     * @type {(function(*): void)|*}
     */
    const handleValue2Change = useCallback(e => {
        updateValue2?.({
            value: +e?.target?.value
        });
    }, [
        updateValue2
    ]);

    return (
        <div className="calculation">
            <div className="row">
                <input value={value1}
                       onChange={handleValue1Change}/>
            </div>
            <div className="row">
                +
                <input value={value2}
                       onChange={handleValue2Change}/>
            </div>
            <hr/>
            <div className="row">
                {value1 + value2}
            </div>
        </div>
    );

};

export default Calculation;
