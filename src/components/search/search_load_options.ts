const geoAPIOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY ?? '',
        'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST ?? '',
    },
}

const geoDbUrl = import.meta.env.VITE_GEO_DB_URL

export const searchLoadOptions = async (search: string) => {
    try {
        const response = await fetch(`${geoDbUrl}${search}`, geoAPIOptions)

        const responseJSON = await response.json()

        const options = responseJSON.data.map((city: { name: string }) => ({
            value: city.name,
            label: city.name,
            ...city,
        }))

        return {
            options,
            hasMore: false,
        }
    } catch (e) {
        console.error('loadOptions:::', e)
        alert(`loadOptions error::: ${e}`)
        return {
            options: [],
            hasMore: false,
        }
    }
}
