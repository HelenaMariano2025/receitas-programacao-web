import Link from "next/link";

export default function Home() {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "80px 20px"
        }}>
            <h1 style={{
                color: "#6f1d35",
                fontSize: "42px"
            }}>
                Viva Santana!
            </h1>

            <div style={{ marginTop: "30px" }}>
                <Link
                    href="/novarota"
                    style={{
                        color: "#6f1d35",
                        fontSize: "18px"
                    }}
                >
                    Rota 1
                </Link>

                <br />
                <br />

                <a
                    href="/novarota"
                    style={{
                        color: "#9b4560",
                        fontSize: "18px"
                    }}
                >
                    Rota 1, jeito antigo
                </a>
            </div>
        </div>
    );
}
