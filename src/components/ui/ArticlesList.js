import PropTypes from 'prop-types'
import Article from './Article'

const ArticleList = ({ articles=[], onLike=f=>f, onRemove=f=>f }) =>
    <div className="page__news-list news-list">
        {articles.length === 0 ?
            <div className="page__text">Новостей нет. (Добавьте новость)</div> :
            articles.map(article =>
                <Article
                    key={article.id}
                    {...article}
                    onLike={(selected, amountLikes) => onLike(article.id, selected, amountLikes)}
                    onRemove={() => onRemove(article.id)}
                />
            )
        }
    </div>

ArticleList.propTypes = {
    news: PropTypes.array,
    onLike: PropTypes.func,
    onRemove: PropTypes.func
}

export default ArticleList