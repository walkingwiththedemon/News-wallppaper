import Comment from '../../../src/components/ui/Comment'

const { shallow } = Enzyme

describe('<Comment /> UI Component', () => {

    it('renders default comment', () =>
        expect(shallow(<Comment />).find('div.ui-comment').length)
            .toBe(1))

})