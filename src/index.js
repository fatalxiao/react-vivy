/**
 * @file index.js
 */

// Vendors
import {useSelector, useDispatch} from 'react-redux';

/**
 * Get model nameSpace
 * @param modelOrNameSpace
 * @returns {{nameSpace}|*}
 */
function getModelNameSpace(modelOrNameSpace) {

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
 * @param modelOrNameSpace
 * @returns {*}
 */
export function useModelState(modelOrNameSpace) {
    const nameSpace = getModelNameSpace(modelOrNameSpace);
    return useSelector(state => state[nameSpace]);
}

/**
 * A hook to access the vivy store's actions and reducers.
 * @param modelOrNameSpace
 * @returns {{}}
 */
export function useModelActions(modelOrNameSpace) {
    const nameSpace = getModelNameSpace(modelOrNameSpace);
    return useDispatch()?.[nameSpace];
}

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param modelOrNameSpace
 * @returns {[]}
 */
export function useModel(modelOrNameSpace) {
    const nameSpace = getModelNameSpace(modelOrNameSpace);
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
