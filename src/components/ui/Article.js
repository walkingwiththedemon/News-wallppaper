import { Component } from 'react'
import PropTypes from 'prop-types'
import Like from './Like'
import Comment from './Comment'
import PublicationDate from './PublicationDate'
import { FaTrashO } from 'react-icons/lib/fa'

class Article extends Component {
    render() {
        const { background, title, text, selected, amountLikes, amountComments, timestamp, onRemove, onLike } = this.props
        return (
            <article className="news-list__item article" style={{backgroundColor: background}}>
                <div className="article__delete">
                    <button className="button" onClick={onRemove}>
                        <FaTrashO size={24} />
                    </button>
                </div>
                <div className="article__inner">
                    <div className="article__title">{title}</div>
                    <div className="article__text">{text}</div>
                    <div className="article__footer">
                        <div className="article__footer">
                            <div className="ui-statistic">
                                <div className="ui-statistic__item">
                                    <div className="ui-statistic__items">
                                        <div className="ui-statistic__item">
                                            <Like
                                                selected={selected}
                                                amountLikes={amountLikes}
                                                onClick={() => onLike(selected, amountLikes)}
                                            />
                                        </div>
                                        <div className="ui-statistic__item">
                                            <Comment
                                                comments={amountComments}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="ui-statistic__item ui-statistic__item--align--right">
                                    <PublicationDate timestamp={timestamp} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

Article.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    amountLikes: PropTypes.number,
    amountComments: PropTypes.number,
    onLike: PropTypes.func,
    onRemove: PropTypes.func
}

Article.defaultProps = {
    background: '#4cabb1',
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error('News preview title must be a string') :
            (props[propName].length > 200) ?
                new Error('News preview title is over 200 characters') :
                null,
    text: 'undefined',
    selected: false,
    amountLikes: 0,
    amountComments: 0,
    onRemove: f=>f,
    onLike: f=>f
}

export default Article