
import Image from "next/image"

const styles = {
    page: {
        minHeight: "100vh",
        backgroundColor: "#f8f0f4",
        padding: "40px 20px"
    },
    card: {
        maxWidth: "850px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 4px 15px rgba(100, 27, 59, 0.10)"
    },
    title: {
        color: "#641b3b",
        marginBottom: "24px"
    },
    info: {
        color: "#444",
        lineHeight: "1.7"
    },
    movie: {
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        alignItems: "flex-start"
    },
    poster: {
        borderRadius: "10px",
        objectFit: "cover"
    }
}

export default async function Home({ params }) {
    const { id } = await params

    const searchParams = new URLSearchParams({
        apikey: process.env.OMDB_API_KEY,
        i: id
    })

    const response = await fetch(
        `https://www.omdbapi.com/?${searchParams.toString()}`
    )

    const movie = await response.json()

    if (movie.Response === "False") {
        return (
            <main style={styles.page}>
                <section style={styles.card}>
                    <h1 style={styles.title}>Filme não encontrado</h1>
                    <p>{movie.Error}</p>
                </section>
            </main>
        )
    }

    return (
        <main style={styles.page}>
            <section style={styles.card}>
                <div style={styles.movie}>
                    {movie.Poster && movie.Poster !== "N/A" && (
                        <Image
                            src={movie.Poster}
                            alt={`Pôster do filme ${movie.Title}`}
                            width={240}
                            height={355}
                            style={styles.poster}
                        />
                    )}

                    <div>
                        <h1 style={styles.title}>
                            {movie.Title} ({movie.Year})
                        </h1>

                        <div style={styles.info}>
                            <p><strong>Diretor:</strong> {movie.Director}</p>
                            <p><strong>Sinopse:</strong> {movie.Plot}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export async function generateStaticParams() {
    const searchParams = new URLSearchParams({
        apikey: process.env.OMDB_API_KEY,
        s: "lady"
    })

    const response = await fetch(
        `https://www.omdbapi.com/?${searchParams.toString()}`
    )

    const data = await response.json()

    if (!data.Search) {
        return []
    }

    return data.Search.map((movie) => ({
        id: movie.imdbID
    }))
}
