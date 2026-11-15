import { Mensagem } from "../Componentes";

export function MensagemRota() {
    return (
        <div style={{
            backgroundColor: "#9b4560",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px auto",
            maxWidth: "400px"
        }}>
            <h2>Componente criado dentro de page.js!</h2>
            <p>Podemos reutilizar este componente em outra página.</p>
        </div>
    );
}

export default function Rota1() {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "80px 20px"
        }}>
            <h1 style={{ color: "#6f1d35" }}>
                Minha primeira rota!
            </h1>

            <Mensagem />

            <MensagemRota />

            <p style={{ color: "#555", fontSize: "18px" }}>
                Esta é a página da rota 1.
            </p>
        </div>
    );
}