import { MensagemRota } from "../../rota1/page";
import { Saudacao } from "../componentes";

export default function Sobre() {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "80px 20px"
        }}>
            <h1 style={{ color: "#6f1d35" }}>
                Sobre esta página
            </h1>

            <p style={{
                color: "#555",
                fontSize: "18px"
            }}>
                Esta é uma nova página dentro da rota novarota.
            </p>

            <MensagemRota />
            <Saudacao />
        </div>
    );
}