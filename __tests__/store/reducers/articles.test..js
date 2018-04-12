import C from '../../../src/constants'
import { articles } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe('articles Reducer', () => {
    it('ADD_NEWS success', () => {
        const state = [
            {
                id: 0,
                background: '#242424',
                title: 'New News form test',
                text: 'Text to new news',
                amountLikes: 44,
                amountComments: 15,
                selected: false,
                timestamp: '10.04.2018'
            }
        ]
        const action = {
            type: C.ADD_ARTICLE,
            id: 1,
            background: '#232323',
            title: 'New News form test 2',
            text: 'Text to new news 2',
            amountLikes: 5,
            selected: false,
            amountComments: 1,
            timestamp: '09.04.2018'
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(articles(state, action)).toEqual([
            {
                id: 0,
                background: '#242424',
                title: 'New News form test',
                text: 'Text to new news',
                amountLikes: 44,
                amountComments: 15,
                selected: false,
                timestamp: '10.04.2018'
            },
            {
                id: 1,
                background: '#232323',
                title: 'New News form test 2',
                text: 'Text to new news 2',
                amountLikes: 5,
                amountComments: 1,
                selected: false,
                timestamp: '09.04.2018'
            }
        ])
    })

    it('LIKE_NEWS success', () => {
        const state = [
            {
                id: 0,
                background: '#242424',
                title: 'New News form test',
                text: 'Text to new news',
                amountLikes: 44,
                amountComments: 15,
                selected: false,
                timestamp: '10.04.2018'
            },
            {
                id: 1,
                background: '#232323',
                title: 'New News form test 2',
                text: 'Text to new news 2',
                amountLikes: 5,
                amountComments: 1,
                selected: false,
                timestamp: '09.04.2018'
            }
        ]
        const action = {
            type: C.LIKE_ARTICLE,
            id: 1,
            selected: true,
            amountLikes: 6
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(articles(state, action)).toEqual([
            {
                id: 0,
                background: '#242424',
                title: 'New News form test',
                text: 'Text to new news',
                selected: false,
                amountLikes: 44,
                amountComments: 15,
                timestamp: '10.04.2018'
            },
            {
                id: 1,
                background: '#232323',
                title: 'New News form test 2',
                text: 'Text to new news 2',
                selected: true,
                amountLikes: 6,
                amountComments: 1,
                timestamp: '09.04.2018'
            }
        ])
    })

    it('REMOVE_NEWS success', () => {
        const state = [
            {
                id: 0,
                background: '#242424',
                title: 'New News form test',
                text: 'Text to new news',
                selected: false,
                amountLikes: 44,
                amountComments: 15,
                timestamp: '10.04.2018'
            },
            {
                id: 1,
                background: '#232323',
                title: 'New News form test 2',
                text: 'Text to new news 2',
                selected: false,
                amountLikes: 5,
                amountComments: 1,
                timestamp: '09.04.2018'
            }
        ]
        const action = {
            type: C.REMOVE_ARTICLE,
            id: 1,
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(articles(state, action)).toEqual([
            {
                id: 0,
                background: '#242424',
                title: 'New News form test',
                text: 'Text to new news',
                selected: false,
                amountLikes: 44,
                amountComments: 15,
                timestamp: '10.04.2018'
            }
        ])
    })
})