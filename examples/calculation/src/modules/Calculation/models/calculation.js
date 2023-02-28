/**
 * @file calculation.js
 */

export default {
    nameSpace: 'calculation',
    state: {
        value1: 1,
        value2: 1
    },
    reducers: {

        /**
         * Update value1
         * @param state
         * @param value
         * @returns {*&{value1}}
         */
        updateValue1: (state, {value}) => {
            return {
                ...state,
                value1: value
            };
        },

        /**
         * Update value2
         * @param state
         * @param value
         * @returns {*&{value2}}
         */
        updateValue2: (state, {value}) => {
            return {
                ...state,
                value2: value
            };
        }

    }
};
