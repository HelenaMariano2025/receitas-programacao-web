'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey")
    const year = formData.get("year")

    if (!titleSearchKey || titleSearchKey.trim() === "") {
        return { Search: [] }
    }

    try {
        const params = new URLSearchParams({
            apikey: process.env.OMDB_API_KEY,
            s: titleSearchKey.trim()
        })

        if (year && year.trim() !== "") {
            params.set("y", year)
        }

        const httpRes = await fetch(
            `https://www.omdbapi.com/?${params.toString()}`
        )

        const jsonRes = await httpRes.json()

        return jsonRes
    } catch (err) {
        return { error: `Erro na requisição: ${err.message}` }
    }
}
