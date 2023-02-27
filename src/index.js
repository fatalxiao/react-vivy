/**
 * @file index.js
 */

import {useSelector, useStore} from 'react-redux';

/**
 * A hook to access the vivy store's state.
 * @param nameSpace
 * @returns {(*)[]}
 */
export function useModelState(nameSpace) {
    return useSelector(state => state[nameSpace]);
}

/**
 * A hook to access the vivy store's actions and reducers.
 * @param nameSpace
 * @returns {(*)[]}
 */
export function useModelActions(nameSpace) {
    return useStore()?.dispatch?.[nameSpace];
}

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param nameSpace
 * @returns {(*)[]}
 */
export function useModel(nameSpace) {
    return [
        useModelState(nameSpace),
        useModelActions(nameSpace)
    ];
}

export * from 'react-redux';
