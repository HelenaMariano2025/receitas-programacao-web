export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const titleSearchKey = searchParams.get("titleSearchKey") || ""

    const httpRes = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${encodeURIComponent(titleSearchKey)}`
    )

    const jsonRes = await httpRes.json()

    return Response.json({ ...jsonRes })
}