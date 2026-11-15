import { MariaPrea } from "./componentes";

export default function NovaRotaHome() {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "80px 20px"
        }}>
            <h1 style={{ color: "#6f1d35" }}>
                Nova Rota, Nova Página
            </h1>
            <MariaPrea mensagem="Esta mensagem foi enviada por uma propriedade!" />
        </div>
    );
}