
import Form from "next/form";

export default function FormularioPesquisa() {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            padding: "10px 20px 20px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center"
        }}>
            <h1 style={{
                color: "#6f1d35",
                marginBottom: "30px"
            }}>
                Pesquisar filmes
            </h1>

            <Form action="/movies" style={{
                backgroundColor: "white",
                maxWidth: "400px",
                margin: "0 auto",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: "left"
            }}>
                <label htmlFor="idTitleSearchKey">
                    Título do filme
                </label>

                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    placeholder="Ex.: Batman"
                    style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "6px"
                    }}
                />

                <label htmlFor="idYearSearchKey">
                    Ano de lançamento
                </label>

                <input
                    id="idYearSearchKey"
                    name="yearSearchKey"
                    type="number"
                    placeholder="Ex.: 2022"
                    style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "6px"
                    }}
                />

                <button type="submit" style={{
                    backgroundColor: "#6f1d35",
                    color: "white",
                    padding: "12px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginTop: "10px"
                }}>
                    Pesquisar
                </button>
            </Form>
        </div>
    );
}
