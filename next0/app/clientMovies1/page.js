"use client"

import Form from "next/form"
import { useState, memo } from "react"
import { useFormStatus } from "react-dom"

export default function Home() {
    console.log("Home renderizou")
    const [resultMovies, setResultMovies] = useState([])
    const [titleSearch, setTitleSearch] = useState("")

    async function handleAction(formData) {
        const titleSearchKey = formData.get("titleSearchKey")

        setTitleSearch(titleSearchKey)

        const httpRes = await fetch(
            `/api/movies?title=${encodeURIComponent(titleSearchKey)}`
        )

        const jsonRes = await httpRes.json()

        setResultMovies(jsonRes.Search || [])
    }

    return (
        <main style={styles.page}>
            <section style={styles.container}>
                <h1 style={styles.title}>Pesquisa de Filmes</h1>
                <p style={styles.subtitle}>
                    Encontre filmes e descubra mais sobre eles.
                </p>

                <MovieForm
                    handleAction={handleAction}
                    titleSearch={titleSearch}
                    setTitleSearch={setTitleSearch}
                />

                <MovieTable movies={resultMovies} />
            </section>
        </main>
    )
}

export const MovieForm = memo(function MovieForm({ handleAction, titleSearch, setTitleSearch }) {
    console.log("MovieForm renderizou")
    return (
        <Form action={handleAction} style={styles.form}>
            <label htmlFor="idTitleSearchKey" style={styles.label}>
                Título do filme
            </label>

            <div style={styles.searchArea}>
                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    value={titleSearch}
                    onChange={(event) => setTitleSearch(event.target.value)}
                    placeholder="Ex.: Titanic, Avatar..."
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
        <button
            type="submit"
            disabled={pending}
            style={{
                ...styles.button,
                opacity: pending ? 0.7 : 1,
                cursor: pending ? "not-allowed" : "pointer"
            }}
        >
            {pending ? "Pesquisando..." : "Pesquisar"}
        </button>
    )
}

export const MovieTable = memo(function MovieTable({ movies }) {
    console.log("MovieTable renderizou")
    return (
        <section style={styles.results}>
            <h2 style={styles.resultsTitle}>Resultados da pesquisa</h2>

            {movies.length === 0 ? (
                <p style={styles.empty}>
                    Nenhum filme encontrado. Faça uma pesquisa para começar.
                </p>
            ) : (
                <div style={styles.movieList}>
                    {movies.map((m) => (
                        <article key={m.imdbID} style={styles.movieCard}>
                            <h3 style={styles.movieTitle}>{m.Title}</h3>
                            <p style={styles.movieYear}>Ano: {m.Year}</p>
                        </article>
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
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif"
    },
    container: {
        maxWidth: "850px",
        margin: "0 auto",
        padding: "35px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 5px 20px rgba(80, 20, 50, 0.08)"
    },
    title: {
        color: "#641b3b",
        fontSize: "30px",
        marginBottom: "8px"
    },
    subtitle: {
        color: "#806875",
        marginBottom: "30px"
    },
    form: {
        marginBottom: "35px"
    },
    label: {
        display: "block",
        color: "#641b3b",
        fontWeight: "bold",
        marginBottom: "10px"
    },
    searchArea: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
    },
    input: {
        flex: "1",
        minWidth: "200px",
        padding: "13px",
        border: "1px solid #e2c5d2",
        borderRadius: "8px",
        fontSize: "15px",
        outlineColor: "#a84b72"
    },
    button: {
        padding: "13px 24px",
        backgroundColor: "#762747",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: "bold"
    },
    results: {
        borderTop: "1px solid #f0dfe7",
        paddingTop: "25px"
    },
    resultsTitle: {
        color: "#641b3b",
        fontSize: "21px",
        marginBottom: "18px"
    },
    empty: {
        color: "#907b86",
        backgroundColor: "#fcf7fa",
        padding: "20px",
        borderRadius: "8px"
    },
    movieList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px"
    },
    movieCard: {
        padding: "18px",
        backgroundColor: "#fcf7fa",
        border: "1px solid #f0dfe7",
        borderRadius: "10px"
    },
    movieTitle: {
        color: "#762747",
        fontSize: "17px",
        marginBottom: "8px"
    },
    movieYear: {
        color: "#806875",
        fontSize: "14px"
    }
}
