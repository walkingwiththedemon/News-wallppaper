import PropTypes from 'prop-types'
import { FaHeartO, FaHeart } from 'react-icons/lib/fa'

const Like = ({ selected=false, amountLikes=0, onClick=f=>f }) =>
    <div className={selected ? 'ui-like ui-like--selected' : 'ui-like'} onClick={() => onClick()}>
        <div className="ui-like__item">
            <div className="ui-like__icon">
                { !selected ? <FaHeartO size={20} /> : <FaHeart size={20} /> }
            </div>
        </div>
        <div className="ui-like__item">{amountLikes}</div>
    </div>

Like.propTypes = {
    selected: PropTypes.bool,
    amountLikes: PropTypes.number,
    onLike: PropTypes.func
}

export default Like