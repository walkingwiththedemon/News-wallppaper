import C from '../../../src/constants'
import { sort } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe('sort Reducer', () => {
    it('SORT_NEWS success', () => {
        const state = {}
        const action = {
            type: C.SORT_ARTICLE,
            sortBy: 'SORTED_BY_LIKE'
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(sort(state, action)).toEqual('SORTED_BY_LIKE')
    })

    it('defaults to SORTED_BY_DATE', () =>
        expect(sort()).toEqual('SORTED_BY_DATE'))
})