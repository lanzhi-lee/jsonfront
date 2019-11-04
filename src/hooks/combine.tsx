import { TYPES } from './action-types'

type State = any
interface Action { type: TYPES, data: null | number | string | string[] | boolean[] }
interface Store { [propName: string]: State }
interface Reducer { (preState: State, action: Action): State }
interface Reducers { [propName: string]: Reducer }
interface ICombineReducers { (reducers: Reducers): (state: Store, action: Action) => Store }

export const combineReducers: ICombineReducers = (reducers) => {

    return (state: any = {}, action: Action) => {

        return Object.keys(reducers).reduce(
            (
                nextState: { [propName: string]: State },
                key: string): { [propName: string]: State } => {

                //key: count,key
                //state[key]:当前遍历的reducer先前的state值
                //nextState[key]:当前遍历的reducer变化后的state值
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            }, {})
    };
};