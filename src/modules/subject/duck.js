import * as constants from './constants'
import { getSubject } from './api'

// Action Creators
export const fetchSubjectSuccess = (payload) => ({
  type: constants.FETCH_SUBJECT_SUCCESS,
  payload,
})

// Reducers
const initialValue = null
const subject = (state = initialValue, action) => {
  switch (action.type) {
    case constants.FETCH_SUBJECT_SUCCESS:
      return action.payload
    default:
      return state
  }
}

// Reducers
export const fetchSubject = (value) => async (dispatch) => {
  try {
    const result = await getSubject(value)

    dispatch(fetchSubjectSuccess(result))
  } catch (error) {
    console.error(error)
  }
}

export default subject
