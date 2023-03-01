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
 * @param modelOrNameSpace
 */
export function useModelState(modelOrNameSpace?: string | object): any

/**
 * A hook to access the vivy store's actions and reducers.
 * @param modelOrNameSpace
 */
export function useModelActions(modelOrNameSpace?: string | object): VivyModelActions

/**
 * A hook to access the vivy store's state, actions and reducers.
 * @param modelOrNameSpace
 */
export function useModel(modelOrNameSpace?: string | object): [any, VivyModelActions]

/**
 * A hook to access the vivy store's global reducers.
 */
export function useGlobalReducers(): VivyGlobalReducers
