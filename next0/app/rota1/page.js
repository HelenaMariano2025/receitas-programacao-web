import { Mensagem } from "../Componentes";

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

            <p style={{ color: "#555", fontSize: "18px" }}>
                Esta é a página da rota 1.
            </p>
        </div>
    );
}