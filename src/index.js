/**
 * @file index.js
 */

// Vendors
import {useSelector, useDispatch} from 'react-redux';

/**
 * Parse model nameSpace
 * @param modelOrNameSpace
 * @returns {{nameSpace}|*}
 */
export function _parseModelNameSpace(modelOrNameSpace) {

    if (
        typeof modelOrNameSpace === 'object'
        && modelOrNameSpace?.hasOwnProperty('nameSpace')
        && typeof modelOrNameSpace?.nameSpace === 'string'
    ) {
        return modelOrNameSpace.nameSpace;
    }

    return modelOrNameSpace;

}

/**
 * A hook to access the vivy store's state.
 * @param arg
 * @returns {*}
 */
export function useModelState(arg) {

    if (typeof arg === 'function') {
        return useSelector(arg);
    }

    const nameSpace = _parseModelNameSpace(arg);
    return useSelector(state => state[nameSpace]);

}

/**
 * A hook to access the vivy store's actions and reducers.
 * @param arg
 * @returns {{}}
 */
export function useModelActions(arg) {

    if (typeof arg === 'function') {
        return arg(useDispatch());
    }

    const nameSpace = _parseModelNameSpace(arg);
    return useDispatch()?.[nameSpace];

}

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param arg
 * @returns {[]}
 */
export function useModel(arg) {
    return [
        useModelState(arg),
        useModelActions(arg)
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
