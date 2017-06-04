import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from '../../app/reducers'
import VisibleTodoList from '../../app/containers/VisibleTodoList'

import { mount } from 'enzyme'

const store = createStore(reducers, {
  todos: [{
    id: 0,
    text: 'a',
    completed: true
  }, {
    id: 1,
    text: 'b',
    completed: false
  }],
  visibilityFilter: 'SHOW_ACTIVE'
})

function setup() {
  const enzymeWrapper = mount(<Provider store={store}>
      <VisibleTodoList />
    </Provider>);

  return {
    enzymeWrapper
  }
}

describe('VisibleTodoList', () => {
  it('should render active todos', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('li').at(0).text()).toEqual('b');
  })
})
