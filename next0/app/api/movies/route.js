export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || ""

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${encodeURIComponent(title)}`
    )

    const data = await response.json()

    return Response.json(data)
}
