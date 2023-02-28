export * from 'react-redux';

/**
 * A hook to access the vivy store's state.
 * @param nameSpace
 */
export function useModelState(nameSpace?: string): any

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
 * A hook to access the vivy store's actions and reducers.
 * @param nameSpace
 */
export function useModelActions(nameSpace?: string): VivyModelActions

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param nameSpace
 */
export function useModel(nameSpace?: string): [any, VivyModelActions]

/**
 * A hook to access the vivy store's global reducers.
 */
export function useGlobalReducers(): VivyGlobalReducers
