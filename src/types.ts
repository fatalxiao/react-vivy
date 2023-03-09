/**
 * @file types.ts
 * @author Liangxiaojun
 */

import {ModelActionCreatorFunction} from 'vivy';

export interface Dispatcher extends ModelActionCreatorFunction {
    [key: string]: any;
}

export interface DispatcherMapObject {
    [key: string]: Dispatcher;
}
