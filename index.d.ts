export * from 'react-redux';

export function useModelState(nameSpace?: string): any

export type VivyModelAction = Function

export interface VivyModelActions {
    [actionName: string]: VivyModelAction
}

export function useModelActions(nameSpace?: string): VivyModelActions

export function useModel(nameSpace?: string): [any, VivyModelActions]
