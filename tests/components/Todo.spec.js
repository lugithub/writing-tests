import React from 'react'
import { shallow } from 'enzyme'
import Todo from '../../app/components/Todo'

function setup() {
  const props = {
    onClick: jest.fn(),
    completed: false,
    text: 'todos'
  }

  const enzymeWrapper = shallow(<Todo {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Todo', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setup()

      expect(enzymeWrapper.find('li').text()).toBe('todos')

      const liProps = enzymeWrapper.find('li').props()
      expect(liProps.onClick).toBe(props.onClick)
      expect(liProps.style).toEqual({
        textDecoration: 'none'
      })
    })

    it('should call onClick', () => {
      const { enzymeWrapper, props } = setup()

      const liProps = enzymeWrapper.find('li').props()

      expect(props.onClick.mock.calls.length).toBe(0)
      
      liProps.onClick();
      expect(props.onClick.mock.calls.length).toBe(1)
    })
  })
})
