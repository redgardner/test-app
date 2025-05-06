import { useFetchGraphQL } from '../api/fetchCountries'

export const DataList = () => {
    const API_URL = 'https://countries.trevorblades.com'

    const ALL_COUNTRIES_QUERY = `
        query GetAllCountries {
            countries {
                cod
                nam
            }
            }
        `
    const { loading, data, error } = useFetchGraphQL(
        API_URL,
        ALL_COUNTRIES_QUERY
    )
    console.log(data)

    if (loading) {
        return <div> Loading....</div>
    }
    if (error) {
        return <div> {error.message}</div>
    }
    return (
        <div>
            <label>Data to Fetch: </label>
            <li>${JSON.stringify(data)}</li>
        </div>
    )
}
