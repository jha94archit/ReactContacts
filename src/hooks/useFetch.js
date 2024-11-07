import React, {useState, useEffect} from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await axios.get(url, {
                    headers: {
                        "X-Master-Key": "$2a$10$kDnfA5tEFYO/cQcykpULde4Lng5yGmVBmwRZlP4YDYT5wXNy3IA4u"
                    }
                })
                 setData(response.data.record.contacts)

            }
            catch(err) {
                setError(err.message)
            }
            finally {
                setIsLoading(false)
            }
        }

        fetchData();
    }, [url])

    return {data, isLoading, error}
}

export default useFetch