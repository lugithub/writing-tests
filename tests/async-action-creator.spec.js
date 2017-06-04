import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../app/actions'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    nock('http://example.com/')
      .get('/todos')
      .reply(200, { body: { todos: ['do something'] }})

    const expectedActions = [
      { type: actions.FETCH_TODOS_REQUEST },
      { type: actions.FETCH_TODOS_SUCCESS, body: { todos: ['do something']  } }
    ]
    const store = mockStore({ todos: [] })

    //return the promise is required. otherwise a falsy pass
    return store.dispatch(actions.fetchTodos())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
