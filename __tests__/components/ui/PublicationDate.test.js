import PublicationDate from '../../../src/components/ui/PublicationDate'

const { shallow } = Enzyme

describe('<PublicationDate /> UI Component', () => {

    it('render default publication date', () =>
        expect(shallow(<PublicationDate />).find('div.time-ago').length)
            .toBe(1))

})
