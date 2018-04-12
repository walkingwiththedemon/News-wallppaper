import PropTypes from 'prop-types'

const AddNewsForm = ({ onNewNews=f=>f }) => {
    let _background, _title, _text

    const submit = e => {
        e.preventDefault()
        onNewNews(_background.value, _title.value, _text.value)
        _background.value = '#4cabb1'
        _title.value = ''
        _text.value = ''
    }

    return (
        <div className="page__form">
            <div className="container">
                <form className="form form--add--news" onSubmit={submit}>
                    <div className="form__items">
                        <div className="form__item">
                            <select ref={select => _background = select} className="select">
                                <option value="#4cabb1">blue</option>
                                <option value="#69c7ad">green</option>
                                <option value="image">image</option>
                            </select>
                        </div>
                        <div className="form__item">
                            <input ref={input => _title = input} type="text" className="input" maxLength="50" placeholder="Заголовок статьи (максимально 50 символов)" required />
                        </div>
                        <div className="form__item">
                            <textarea ref={textarea => _text = textarea} className="textarea" placeholder="Текст статьи..." />
                        </div>
                    </div>
                    <div className="form__button">
                        <button className="button button--blue" type="submit">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

AddNewsForm.propTypes = {
    onNewNews: PropTypes.func
}

export default AddNewsForm