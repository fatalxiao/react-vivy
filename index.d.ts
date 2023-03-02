export * from 'react-redux';

/**
 * The action or reducer of Vivy model.
 */
export type VivyModelAction = Function

/**
 * The actions and reducers of Vivy model.
 */
export interface VivyModelActions {
    [actionName: string]: VivyModelAction
}

/**
 * The action or reducer of Vivy model.
 */
export type VivyGlobalReducer = Function

/**
 * The actions and reducers of Vivy model.
 */
export interface VivyGlobalReducers {
    [globalReducerName: string]: VivyGlobalReducer
}

/**
 * A hook to access the vivy store's state.
 * @param arg
 */
export function useModelState(arg?: string | object | Function): any

/**
 * A hook to access the vivy store's actions and reducers.
 * @param arg
 */
export function useModelActions(arg?: string | object | Function): VivyModelActions

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param arg
 */
export function useModel(arg?: string | object | Function): [any, VivyModelActions]

/**
 * A hook to access the vivy store's global reducers.
 */
export function useGlobalReducers(): VivyGlobalReducers
