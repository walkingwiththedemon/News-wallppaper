import storeFactory from '../src/store'
import { sortArticles, addArticle, likeArticle, removeArticle } from '../src/actions'

describe('Actions Creators', () => {

    let store

    describe('addArticle', () => {
        const articles = [
            {
                id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
                background: '#232323',
                title: 'New News form test 1',
                text: 'Text to new news 1',
                selected: true,
                amountLikes: 14,
                amountComments: 87,
                timestamp: '05.04.2018'
            },
            {
                id: 'f9005b4e-975e-433d-a646-79df172e1dbc',
                background: '#252525',
                title: 'New News form test 2',
                text: 'Text to new news 2',
                selected: false,
                amountLikes: 5,
                amountComments: 1,
                timestamp: '09.04.2018'
            },
            {
                id: 'f9005b4e-975e-433d-a646-79df172e1dba',
                background: '#252525',
                title: 'New News form test 2',
                text: 'Text to new news 2',
                selected: false,
                amountLikes: 5,
                amountComments: 1,
                timestamp: '09.04.2018'
            }
        ]

        beforeAll(() => {
            store = storeFactory({articles})
            console.log(store)
            store.dispatch(addArticle('#000000', 'Dark Blue', '#000033'))
        })

        afterAll(() => global.localStorage['redux-store'] = false)

        it('should add a new news', () =>
            expect(store.getState().articles.length).toBe(4))

        it('should add a unique guid id', () =>
            expect(store.getState().articles[3].id.length).toBe(36))

        it('should set amountComments', () =>
            expect(store.getState().articles[3].amountComments).toBeDefined())

        it('should set amountLike', () =>
            expect(store.getState().articles[3].amountLikes).toBeDefined())

        it('should set the like to false', () =>
            expect(store.getState().articles[3].selected).toBe(false))

        it('should set timestamp', () =>
            expect(store.getState().articles[3].timestamp).toBeDefined())
    })

    describe('likeArticle', () => {

        let articles = [
            {
                id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
                background: '#232323',
                title: 'New News form test 1',
                text: 'Text to new news 1',
                selected: false,
                amountLikes: 14,
                amountComments: 87,
                timestamp: '05.04.2018'
            }
        ]

        beforeAll(() => {
            store = storeFactory({articles})
            store.dispatch(likeArticle('f9005b4e-975e-433d-a646-79df172e1dbb', false, 14))
        })

        it('should like the article', () => expect(store.getState().articles[0].selected)
            .toEqual(true))

        it('should amount of likes the article', () => expect(store.getState().articles[0].amountLikes)
            .toEqual(15))

    })

    describe('removeArticle', () => {

        let articles = [
            {
                id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
                background: '#232323',
                title: 'New News form test 1',
                text: 'Text to new news 1',
                selected: false,
                amountLikes: 14,
                amountComments: 87,
                timestamp: '05.04.2018'
            },
            {
                id: 'f9005b4e-975e-433d-a646-79df172e1dbc',
                background: '#232323',
                title: 'New News form test 1',
                text: 'Text to new news 1',
                selected: false,
                amountLikes: 14,
                amountComments: 87,
                timestamp: '05.04.2018'
            }
        ]

        beforeAll(() => {
            store = storeFactory({articles})
            store.dispatch(removeArticle('f9005b4e-975e-433d-a646-79df172e1dbc'))
        })

        it('should remove the article', () => expect(store.getState().articles.length)
            .toEqual(1))

    })

    describe('sortArticle', () => {

        beforeAll(() => store = storeFactory())

        it('can dispatch sort articles', () => {
            store.dispatch(sortArticles('SORTED_BY_LIKE'))
            expect(store.getState().sort).toEqual('SORTED_BY_LIKE')
        })

        it('can sort by comments', () => {
            store.dispatch(sortArticles('SORTED_BY_COMMENT'))
            expect(store.getState().sort).toEqual('SORTED_BY_COMMENT')
        })

        it("(default) sorts articles by date", () => {
            store.dispatch(sortArticles())
            expect(store.getState().sort).toEqual("SORTED_BY_DATE")
        })

    })

})