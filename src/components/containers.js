import { connect } from 'react-redux'
import AddNewsForm from './ui/AddNewsForm'
import ArticleList from './ui/ArticleList'
import SortMenu from './ui/SortMenu'
import { addArticle, removeArticle, likeArticle, sortArticles} from '../actions'
import { sortFunction } from '../lib/array-helpers'

export const NewsForm = connect(
    null,
    dispatch => ({
        onNewNews(background, title, text) {
            dispatch(addArticle(background, title, text))
        }
    })
)(AddNewsForm)

export const SortNews = connect(
    state =>
        ({
            sort: state.sort
        }),
    dispatch =>
        ({
            onSelect(sortBy) {
                dispatch(sortArticles(sortBy))
            }
        })
)(SortMenu)

export const Articles = connect(
    state =>
        ({
            articles: [...state.articles].sort(sortFunction(state.sort))
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeArticle(id))
            },
            onLike(id, selected, amountLikes) {
                dispatch(likeArticle(id, selected, amountLikes))
            }
        })
)(ArticleList)