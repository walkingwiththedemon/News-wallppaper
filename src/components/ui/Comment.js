import PropTypes from 'prop-types'
import { FaCommentO } from 'react-icons/lib/fa'

const Comment = ({ comments }) =>
    <div className="ui-comment">
        <div className="ui-comment__item">
            <div className="ui-comment__icon">
                <FaCommentO size={20} />
            </div>
        </div>
        <div className="ui-comment__item">{comments}</div>
    </div>

Comment.propTypes = {
    comments: PropTypes.number
}

export default Comment