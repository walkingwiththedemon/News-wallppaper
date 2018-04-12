import C from './../constants'

export const article = (state={}, action={ type: null }) => {
    switch (action.type) {
        case C.ADD_ARTICLE:
            return {
                id: action.id,
                background: action.background,
                title: action.title,
                text: action.text,
                selected: action.selected,
                amountComments: action.amountComments,
                amountLikes: action.amountLikes,
                timestamp: action.timestamp
            }
        case C.LIKE_ARTICLE:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    selected: action.selected,
                    amountLikes: action.amountLikes
                }
        default:
            return state
    }
}

export const articles = (state=[], action={ type: null }) => {
    switch (action.type) {
        case C.ADD_ARTICLE:
            return [
                ...state,
                article({}, action)
            ]
        case C.LIKE_ARTICLE:
            return state.map(
                n => article(n, action)
            )
        case C.REMOVE_ARTICLE:
            return state.filter(
                n => n.id !== action.id
            )
        default:
            return state
    }
}

export const sort = (state='SORTED_BY_DATE', action={ type: null }) => {
    switch (action.type) {
        case C.SORT_ARTICLE:
            return action.sortBy
        default :
            return state
    }
}