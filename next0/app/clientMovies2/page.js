
"use client"

import Form from "next/form"
import { useState, memo } from "react"
import { useFormStatus } from "react-dom"

export default function Home() {
    const [resultMovies, setResultMovies] = useState([])
    const [titleSearch, setTitleSearch] = useState("")

    async function handleAction(formData) {
        const titleSearchKey = formData.get("titleSearchKey")

        setTitleSearch(titleSearchKey)

        const httpRes = await fetch(
            `/api/searchMovies?titleSearchKey=${encodeURIComponent(titleSearchKey)}`
        )

        const jsonRes = await httpRes.json()

        setResultMovies(jsonRes.Search || [])
    }

    return (
        <main style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>Pesquisa de Filmes</h1>
                <p style={styles.subtitle}>
                    Consulte filmes usando nossa API.
                </p>

                <MovieForm
                    handleAction={handleAction}
                    titleSearch={titleSearch}
                    setTitleSearch={setTitleSearch}
                />

                <MovieTable movies={resultMovies} />
            </div>
        </main>
    )
}

export const MovieForm = memo(function MovieForm({
    handleAction,
    titleSearch,
    setTitleSearch
}) {
    return (
        <Form action={handleAction}>
            <label htmlFor="idTitleSearchKey" style={styles.label}>
                Título
            </label>

            <div style={styles.searchContainer}>
                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    value={titleSearch}
                    onChange={(event) => setTitleSearch(event.target.value)}
                    placeholder="Digite o nome de um filme..."
                    style={styles.input}
                />

                <SubmitButton />
            </div>
        </Form>
    )
})

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending} style={styles.button}>
            {pending ? "Pesquisando..." : "Pesquisar"}
        </button>
    )
}

export const MovieTable = memo(function MovieTable({ movies }) {
    return (
        <section style={styles.results}>
            <h2 style={styles.subtitle}>Resultados da pesquisa</h2>

            {movies.length === 0 ? (
                <p style={styles.empty}>
                    Nenhum resultado para exibir.
                </p>
            ) : (
                <div style={styles.grid}>
                    {movies.map((movie) => (
                        <div key={movie.imdbID} style={styles.card}>
                            <h3 style={styles.movieTitle}>{movie.Title}</h3>
                            <p style={styles.year}>Ano: {movie.Year}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
})

const styles = {
    page: {
        minHeight: "100vh",
        backgroundColor: "#f8f0f4",
        padding: "40px 20px",
    },
    container: {
        maxWidth: "850px",
        margin: "0 auto",
        padding: "35px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(100, 27, 59, 0.10)",
    },
    title: {
        color: "#641b3b",
        textAlign: "center",
        fontSize: "30px",
    },
    subtitle: {
        color: "#762747",
        marginBottom: "20px",
    },
    label: {
        display: "block",
        color: "#641b3b",
        marginBottom: "8px",
        fontWeight: "bold",
    },
    searchContainer: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
    },
    input: {
        flex: "1",
        minWidth: "180px",
        padding: "12px",
        border: "1px solid #d9b8c7",
        borderRadius: "8px",
        fontSize: "16px",
    },
    button: {
        padding: "12px 22px",
        backgroundColor: "#762747",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },
    results: {
        marginTop: "35px",
    },
    empty: {
        color: "#777777",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "15px",
    },
    card: {
        padding: "18px",
        backgroundColor: "#fcf5f8",
        border: "1px solid #ead5df",
        borderRadius: "10px",
    },
    movieTitle: {
        color: "#641b3b",
        fontSize: "17px",
    },
    year: {
        color: "#777777",
    },
}
