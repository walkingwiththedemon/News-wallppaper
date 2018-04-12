import PropTypes from 'prop-types'
import { FaCalendarO } from 'react-icons/lib/fa'

const PublicationDate = ({ timestamp }) =>
    <div className="time-ago">
        <div className="time-ago__icon">
            <FaCalendarO size={20} />
        </div>
        <div className="time-ago__text">
            {timestamp}
        </div>
    </div>

PublicationDate.propTypes = {
    TimeAgo: PropTypes.string
}

export default PublicationDate