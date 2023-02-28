/**
 * @file index.js
 */

// Vendors
import {useSelector, useDispatch} from 'react-redux';

/**
 * A hook to access the vivy store's state.
 * @param nameSpace
 * @returns {*}
 */
export function useModelState(nameSpace) {
    return useSelector(state => state[nameSpace]);
}

/**
 * A hook to access the vivy store's actions and reducers.
 * @param nameSpace
 * @returns {{}}
 */
export function useModelActions(nameSpace) {
    return useDispatch()?.[nameSpace];
}

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param nameSpace
 * @returns {[]}
 */
export function useModel(nameSpace) {
    return [
        useModelState(nameSpace),
        useModelActions(nameSpace)
    ];
}

/**
 * A hook to access the vivy store's global reducers.
 * @returns {{}}
 */
export function useGlobalReducers() {
    const dispatch = useDispatch();
    return Object.fromEntries(Object.entries(dispatch).filter(([key, value]) =>
        dispatch.hasOwnProperty(key) && typeof value === 'function'
    ));
}

export * from 'react-redux';
