import { Mensagem } from "./Componentes";

export default function Home() {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif"
        }}>
            <div style={{
                backgroundColor: "#6f1d35",
                color: "white",
                padding: "20px",
                textAlign: "center",
                fontSize: "18px"
            }}>
                Menu principal
            </div>

            <div style={{
                textAlign: "center",
                padding: "80px 20px"
            }}>
                <h1 style={{
                    color: "#6f1d35",
                    fontSize: "42px"
                }}>
                    Viva Santana!
                </h1>

                <Mensagem />

                <p style={{
                    color: "#555",
                    fontSize: "18px"
                }}>
                    Minha primeira página com Next.js.
                </p>
            </div>
        </div>
    );
}
