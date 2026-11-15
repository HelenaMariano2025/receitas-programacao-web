export default async function Home({ searchParams }) {
    const { titleSearchKey = "bagdad" } = await searchParams;
    const res = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${encodeURIComponent(titleSearchKey)}`
    );

    const data = await res.json();

    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            padding: "40px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center"
        }}>
            <h1 style={{ color: "#6f1d35" }}>
                Filmes encontrados
            </h1>

            {data.Search?.map((m) => (
                <div key={m.imdbID} style={{
                    color: "#555",
                    fontSize: "18px",
                    margin: "25px"
                }}>
                    <p>{m.Title} --- {m.Year}</p>

                    {m.Poster !== "N/A" && (
                        <img
                            src={m.Poster}
                            alt={`Pôster de ${m.Title}`}
                            style={{
                                width: "180px",
                                borderRadius: "8px"
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}