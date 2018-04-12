import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import Article from '../../../src/components/ui/Article'

const { shallow, mount } = Enzyme

describe("<Article /> UI Component", () => {

    const shallowExpect = compose(expect,toJSON,shallow)

    it("Renders correct properties", () =>
        shallowExpect(
            <Article
                background="#262626"
                title="test"
                text="test"
                selected={false}
                amountLikes={25}
                amountComments={1}
                timestamp="01.02.10"
            />
        ).toMatchSnapshot()
    )

    it("Invokes onLike property", () => {
        mount(<Article background="#222222" title="test" text="test" />)
            .find('div.ui-like')
            .childAt(1)
            .simulate('click')
    })

    it("Invokes onRemove property", () => {
        mount(<Article background="#222222" title="test" text="test" />)
            .find("button")
            .simulate('click')
    })

})