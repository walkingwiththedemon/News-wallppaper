import C from './constants'
import { v4 } from 'uuid'
import getRandomInt from './lib/random-intager-number'

export const addArticle = (background, title, text) =>
    ({
        type: C.ADD_ARTICLE,
        id: v4(),
        background,
        title,
        text,
        amountComments: getRandomInt(1, 50),
        amountLikes: getRandomInt(1, 200),
        selected: false,
        timestamp: new Date().toLocaleDateString()
    })

export const removeArticle = id =>
    ({
        type: C.REMOVE_ARTICLE,
        id
    })

export const likeArticle = (id, selected, amountLikes) =>
    ({
        type: C.LIKE_ARTICLE,
        id,
        selected: !selected,
        amountLikes: !selected ? ++amountLikes : --amountLikes
    })

export const sortArticles = (sortBy='SORTED_BY_DATE') =>
    ({
        type: C.SORT_ARTICLE,
        sortBy
    })