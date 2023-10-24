/**
 * @file index.ts
 * @author Liangxiaojun
 */

// Vendors
import {useSelector, useDispatch} from 'react-redux';

// Types
import {VivyModel, VivyStoreDispatch} from 'vivy';
import {DispatcherMapObject} from './types';

export * from 'react-redux';
export * from './types';

/**
 * Parse model nameSpace
 * @param nameSpaceOrModel
 */
export function _parseModelNameSpace(nameSpaceOrModel: string | VivyModel<any>): string {

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
export function useModelState(arg: string | VivyModel<any> | ((state: any) => any)): any {

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
    arg: string | VivyModel<any> | ((dispatch: VivyStoreDispatch) => any)
): DispatcherMapObject {

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
export function useModel(arg: string | VivyModel<any>): {
    length: number;
    0: any;
    1: DispatcherMapObject;
    [Symbol.iterator](): IterableIterator<any>;
    [key: string]: any;
} {

    const modelState = useModelState(arg);
    const modelAction = useModelActions(arg);

    return {
        length: 2,
        [Symbol.iterator]: function () {
            let i = -1;
            return {
                next: () => ({
                    value: this[++i],
                    done: i === this.length
                })
            };
        },
        ...modelState,
        ...modelAction,
        0: modelState,
        1: modelAction
    };

}

/**
 * A hook to access the vivy store's global reducers.
 */
export function useGlobalReducers(): DispatcherMapObject {
    const dispatch = useDispatch();
    return Object.fromEntries(Object.entries(dispatch).filter(([key, value]) =>
        dispatch.hasOwnProperty(key) && typeof value === 'function'
    ));
}
