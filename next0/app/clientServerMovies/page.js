"use client"

import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import Link from "next/link"
import { useState, memo } from "react"
import { useFormStatus } from "react-dom"

export default function Home() {
    const [data, setData] = useState({})

    async function handleAction(formData) {
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <main style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>Pesquisa de Filmes</h1>
                <p style={styles.subtitle}>
                    Encontre filmes pelo título e ano de lançamento.
                </p>

                <MovieForm actionHandler={handleAction} />

                {data.Search && (
                    <MovieTable movies={data.Search} />
                )}

                {data.error && (
                    <p style={styles.error}>{data.error}</p>
                )}
            </div>
        </main>
    )
}

const MovieForm = memo(function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler} style={styles.form}>
            <div style={styles.field}>
                <label htmlFor="idTitleSearchKey" style={styles.label}>
                    Título
                </label>
                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    type="text"
                    placeholder="Digite o título do filme"
                    style={styles.input}
                />
            </div>

            <div style={styles.field}>
                <label htmlFor="idYear" style={styles.label}>
                    Ano de lançamento
                </label>
                <input
                    id="idYear"
                    name="year"
                    type="number"
                    placeholder="Ex.: 2022"
                    style={styles.input}
                />
            </div>

            <SubmitButton />
        </Form>
    )
})

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            style={styles.button}
        >
            {pending ? "Pesquisando..." : "Pesquisar"}
        </button>
    )
}

const MovieTable = memo(function MovieTable({ movies }) {
    return (
        <section style={styles.results}>
            <h2 style={styles.resultsTitle}>Resultados da pesquisa</h2>

            {movies.length > 0 ? (
                <div style={styles.movieGrid}>
                    {movies.map((m) => (
                        <div key={m.imdbID} style={styles.movieCard}>
                            <h3 style={styles.movieTitle}>
                                <Link
                                    href={`/movie/${m.imdbID}`}
                                    style={{ color: "inherit", textDecoration: "none" }}
                                >
                                    {m.Title}
                                </Link>
                            </h3>
                            <p style={styles.movieYear}>{m.Year}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={styles.empty}>
                    Nenhum filme encontrado.
                </p>
            )}
        </section>
    )
})

const styles = {
    page: {
        backgroundColor: "#f8f0f4",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
    },
    container: {
        backgroundColor: "#ffffff",
        maxWidth: "850px",
        margin: "0 auto",
        padding: "35px",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(100, 27, 59, 0.10)",
    },
    title: {
        color: "#641b3b",
        textAlign: "center",
        marginBottom: "10px",
    },
    subtitle: {
        color: "#777777",
        textAlign: "center",
        marginBottom: "30px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    field: {
        display: "flex",
        flexDirection: "column",
        gap: "7px",
    },
    label: {
        color: "#641b3b",
        fontWeight: "bold",
    },
    input: {
        padding: "12px",
        border: "1px solid #d9b8c7",
        borderRadius: "8px",
        fontSize: "15px",
        outlineColor: "#762747",
    },
    button: {
        backgroundColor: "#762747",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        padding: "13px",
        fontSize: "15px",
        fontWeight: "bold",
        cursor: "pointer",
    },
    results: {
        marginTop: "35px",
    },
    resultsTitle: {
        color: "#641b3b",
        marginBottom: "18px",
    },
    movieGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
    },
    movieCard: {
        backgroundColor: "#fcf5f8",
        border: "1px solid #ead5df",
        borderRadius: "10px",
        padding: "18px",
    },
    movieTitle: {
        color: "#762747",
        marginTop: "0",
        marginBottom: "8px",
    },
    movieYear: {
        color: "#777777",
        marginBottom: "0",
    },
    empty: {
        color: "#777777",
        textAlign: "center",
        padding: "20px",
    },
    error: {
        color: "#b42318",
        textAlign: "center",
        marginTop: "20px",
    },
}
