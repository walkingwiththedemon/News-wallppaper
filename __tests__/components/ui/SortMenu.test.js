import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import SortMenu from '../../../src/components/ui/SortMenu'

const { shallow, mount } = Enzyme

describe("<SortMenu /> UI Component", () => {

    it("Renders Correctly", () =>
        compose(expect,toJSON,shallow)(
            <SortMenu sort="SORTED_BY_LIKE" />
        ).toMatchSnapshot()
    )

})