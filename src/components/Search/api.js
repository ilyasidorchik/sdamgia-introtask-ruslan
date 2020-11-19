
export const getSubject = async (value) => {
  let data

  try {
    const response = await fetch(
      `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
    )
    data = await response.json()
    data.subject = data.subject ? data.subject : ''

  } catch {
    console.log("error")
  }

  return data.subject
}