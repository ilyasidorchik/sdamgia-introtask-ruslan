export const getSubject = async (value) => {
  let response

  try {
    response = await fetch(
      `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
    )
  } catch (error) {
    console.log('error')
  }

  const data = await response.json()

  return data ? data.subject : ''
}