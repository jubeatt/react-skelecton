import { useEffect, useState } from 'react'

export const useApi = (endPoint) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(endPoint)
        .then((response) => response.json())
        .then((json) => setData(json))
    }, 5000)
  }, [endPoint])

  return { data }
}
