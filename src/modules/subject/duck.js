import * as constants from './constants'
import { getSubject } from './api'

// Action Creator - Создание успешшного действия 
export const fetchSubjectSuccess = (playload) => ({
  type: constants.FETCH_SUBJECT_SUCCESS,
  playload
})

// Reducer - Данные о предмете
const initialValue = null
const subject = (state = initialValue, action) => {
  switch (action.type) {
    case constants.FETCH_SUBJECT_SUCCESS:
      return action.playload
    default:
      return state
  }
}

// Reducer - Функция для получение данных с сервера  
export const fetchSubject = (value) => async (dispatch) => {
  try {
    const result = await getSubject(value)

    dispatch(fetchSubjectSuccess(result))
  } catch (error) {
    console.log(error)
  }
}

export default subject