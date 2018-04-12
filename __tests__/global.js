import React from 'react'
import deepFreeze from 'deep-freeze'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.React = React
global.Enzyme = Enzyme

window.localStorage = {}
console.groupCollapsed = jest.fn()
console.log = jest.fn()
console.groupEnd = jest.fn()

global._testNews = deepFreeze([
    {
        id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
        background: '#232323',
        title: 'title test 1',
        text: 'text test 1',
        amountLikes: 25,
        selected: false,
        amountComments: 25,
        timestamp: '11.04.18'
    },
    {
        id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
        background: '#242424',
        title: 'title test 2',
        text: 'text test 1',
        amountLikes: 15,
        selected: false,
        amountComments: 15,
        timestamp: '10.04.18'
    },
    {
        id: '58d9caee-6ea6-4d7b-9984-65b145031979',
        background: '#252525',
        title: 'title test 3',
        text: 'text test 1',
        amountLikes: 5,
        selected: false,
        amountComments: 5,
        timestamp: '09.04.18'
    }
])