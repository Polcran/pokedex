import { useCallback, useReducer } from 'react'

function asyncReducer(state, action) {
  switch (action.type) {
    case 'pending': {
      return { status: 'pending', data: null, error: null }
    }
    case 'resolved': {
      return { status: 'resolved', data: action.data, error: null }
    }
    case 'rejected': {
      return { status: 'rejected', data: null, error: action.error }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useAsync(initialState) {
  const [state, dispatch] = useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState
  })

  const { data, error, status } = state

  const run = useCallback(
    promise => {
      dispatch({ type: 'pending' })
      promise.then(
        data => {
          dispatch({ type: 'resolved', data })
        },
        error => {
          dispatch({ type: 'rejected', error })
        }
      )
    },
    [dispatch]
  )

  const setData = useCallback(
    data => dispatch({ type: 'resolved', data }),
    [dispatch]
  )

  return {
    data,
    error,
    status,
    setData,
    run
  }
}

export default useAsync
