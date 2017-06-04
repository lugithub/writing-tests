import reducer from '../app/reducers'
import * as actions from '../app/actions'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(void 0, {})
    ).toEqual({
      todos: [],
      visibilityFilter: actions.VisibilityFilters.SHOW_ALL
    })
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer(void 0, {
        type: actions.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual({
      todos: [{
        id: 0,
        text: 'Run the tests',
        completed: false
      }],
      visibilityFilter: actions.VisibilityFilters.SHOW_ALL
    });
  })
})
