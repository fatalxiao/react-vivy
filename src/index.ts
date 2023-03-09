/**
 * @file index.ts
 * @author Liangxiaojun
 */

// Vendors
import {useSelector, useDispatch} from 'react-redux';

// Types
import {VivyModel, VivyStoreDispatch, ModelActionCreatorFunctionMapObject} from 'vivy'

export * from 'react-redux';

/**
 * Parse model nameSpace
 * @param nameSpaceOrModel
 */
export function _parseModelNameSpace(nameSpaceOrModel: string | VivyModel): string {

    if (
        typeof nameSpaceOrModel === 'object'
        && nameSpaceOrModel?.hasOwnProperty('nameSpace')
        && typeof nameSpaceOrModel?.nameSpace === 'string'
    ) {
        return nameSpaceOrModel.nameSpace;
    }

    return nameSpaceOrModel as string;

}

/**
 * A hook to access all vivy store's state.
 */
export function useStoreState(): any {
    return useSelector(state => state);
}

/**
 * A hook to access the vivy store's state.
 * @param arg
 */
export function useModelState(arg: string | VivyModel | ((state: any) => any)): any {

    if (typeof arg === 'function') {
        return useSelector(arg);
    }

    const nameSpace = _parseModelNameSpace(arg);
    return useSelector(state => state?.[nameSpace]);

}

/**
 * A hook to access the vivy store's actions and reducers.
 * @param arg
 */
export function useModelActions(
    arg: string | VivyModel | ((dispatch: VivyStoreDispatch) => any)
): ModelActionCreatorFunctionMapObject {

    if (typeof arg === 'function') {
        return arg(useDispatch());
    }

    const nameSpace = _parseModelNameSpace(arg);
    return useDispatch()?.[nameSpace];

}

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param arg
 */
export function useModel(arg: string | VivyModel): [any, ModelActionCreatorFunctionMapObject] {
    return [
        useModelState(arg),
        useModelActions(arg)
    ];
}

/**
 * A hook to access the vivy store's global reducers.
 */
export function useGlobalReducers(): ModelActionCreatorFunctionMapObject {
    const dispatch = useDispatch();
    return Object.fromEntries(Object.entries(dispatch).filter(([key, value]) =>
        dispatch.hasOwnProperty(key) && typeof value === 'function'
    ));
}
