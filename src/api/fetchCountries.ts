import { useState, useEffect } from 'react'
// You can visit this URL in your browser to test
// different queries and responses.

type FetchState<T> = {
    loading: boolean
    data: T | null
    error: Error[] | null
}

// Optional, feel free to modify or discard.
// This is a minimal representation of a
// valid GraphQL Over HTTP request as a convenience.
export const useFetchGraphQL = (url: string, query: string) => {
    const [state, setState] = useState<FetchState<any>>({
        loading: true,
        data: null,
        error: null,
    })

    const fetchData = async () => {
        try {
            const req = await fetch(url, {
                body: JSON.stringify({ query }),
                method: 'POST',
                headers: {
                    Accept: 'application/json, multipart/mixed',
                    'content-type': 'application/json',
                },
            })

            if (!req.ok) {
                throw new Error('Network response error')
            }
            const data = await req.json()
            if (data.errors) {
                setState({ loading: false, data: null, error: data.errors })
            }
            setState({ loading: false, data: data, error: null })
        } catch (err) {
            setState({
                loading: false,
                data: null,
                error: new Error(String(err)),
            })
        }
    }

    useEffect(() => {
        setState({ loading: true, data: null, error: null })
        fetchData()
    }, [])
    return state
}
