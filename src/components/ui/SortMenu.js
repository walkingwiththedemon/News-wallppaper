import PropTypes from 'prop-types'

const options = {
    date: 'SORTED_BY_DATE',
    like: 'SORTED_BY_LIKE',
    comment: 'SORTED_BY_COMMENT'
}

const SortMenu = ({ sort='SORTED_BY_DATE', onSelect=f=>f }) =>
    <div className="page__sort">
        <div className="container">
            <div className="sort-menu">
                {
                    Object.keys(options).map((item, i) =>
                        <div key={i} className="sort-menu__item">
                            <button
                                className={(sort === options[item]) ? 'button button--state--active sort-menu__button' : 'button sort-menu__button'}
                                onClick={e => {
                                    e.preventDefault()
                                    onSelect(options[item])}}
                            >{item}</button>
                        </div>
                    )
                }
            </div>
        </div>
    </div>

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu