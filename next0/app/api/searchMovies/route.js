import { supabase } from "../../../lib/supabase"
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const titleSearchKey = searchParams.get("titleSearchKey") || ""

    const { data, error } = await supabase
        .from("filmes")
        .select("*")
        .ilike("titulo", `%${titleSearchKey}%`)

    if (error) {
        return Response.json(
            { error: "Erro ao consultar os filmes." },
            { status: 500 }
        )
    }

    return Response.json({
        Search: data.map((filme) => ({
            Title: filme.titulo,
            Year: String(filme.ano),
            imdbID: filme.imdb_id
        }))
    })
}
