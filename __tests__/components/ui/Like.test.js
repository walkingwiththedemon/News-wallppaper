import Like from '../../../src/components/ui/Like'

const { shallow } = Enzyme

describe('<Like /> UI Component', () => {

    it('renders default like', () =>
        expect(shallow(<Like />).find('div.ui-like').length)
            .toBe(1))

    it('renders selected like', () =>
        expect(shallow(<Like selected={true} />).find('div.ui-like.ui-like--selected').length)
            .toBe(1))

    it('click does not cause error', () => {
        shallow(<Like selected={true} />).find('div.ui-like').simulate('click')
    })

    it('invokes onClick', () => {
        const _click = jest.fn()

        shallow(<Like onClick={_click} />)
            .find('div.ui-like')
            .simulate('click')

        expect(_click).toBeCalled()
    })
})