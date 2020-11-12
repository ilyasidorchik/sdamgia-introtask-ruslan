export const getApi = async (value) => {
  const url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
  const response = await fetch(url)
  const data = await response.json()

  return data ? data.subject : ''
}
