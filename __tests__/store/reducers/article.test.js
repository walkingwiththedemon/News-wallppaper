import C from '../../../src/constants'
import { article } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe('article Reducer', () => {
    it('ADD_NEWS success', () => {
        const state = {}
        const action = {
            type: C.ADD_ARTICLE,
            id: 0,
            background: '#242424',
            title: 'New News form test',
            text: 'Text to new news',
            selected: false,
            amountLikes: 44,
            amountComments: 15,
            timestamp: new Date().toLocaleDateString()
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(article(state, action)).toEqual({
            id: 0,
            background: '#242424',
            title: 'New News form test',
            text: 'Text to new news',
            selected: false,
            amountLikes: 44,
            amountComments: 15,
            timestamp: action.timestamp
        })
    })

    it('LIKE_NEWS success', () => {
        const state = {
            id: 0,
            background: '#242424',
            title: 'New News form test',
            text: 'Text to new news',
            selected: false,
            amountLikes: 44,
            amountComments: 15,
            timestamp: '10.04.2018'
        }
        const action = {
            type: C.LIKE_ARTICLE,
            id: 0,
            selected: true,
            amountLikes: 45
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(article(state, action)).toEqual({
            id: 0,
            background: '#242424',
            title: 'New News form test',
            text: 'Text to new news',
            selected: true,
            amountLikes: 45,
            amountComments: 15,
            timestamp: '10.04.2018'
        })
    })
})