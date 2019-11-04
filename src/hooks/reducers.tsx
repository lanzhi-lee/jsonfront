import { TYPES } from './action-types'

export function todolistReducer(state: string[], action: { type: TYPES, data: any }) {
    switch (action.type) {
        default: return state
    }
};