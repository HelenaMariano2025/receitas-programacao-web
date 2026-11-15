export function MariaPrea({ mensagem }) {
    return (
        <h2 style={{
            color: "#9b4560",
            marginTop: "25px"
        }}>
            {mensagem}
        </h2>
    );
}

export function Saudacao() {
    return (
        <div style={{
            backgroundColor: "#6f1d35",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px auto",
            maxWidth: "400px"
        }}>
            <h2>Olá! Que bom ter você aqui!</h2>
            <p>Este é mais um componente reutilizável.</p>
        </div>
    );
}