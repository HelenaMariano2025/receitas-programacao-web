export const metadata = {
    title: "Next.js",
    description: "Minha aplicação com Next.js"
};

import Link from "next/link";

export default function RootLayout({ children }) {
    console.log("montando layout");

    return (
        <html lang="pt-BR">
            <body style={{ margin: 0 }}>
                <nav style={{
                    backgroundColor: "#6f1d35",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px"
                }}>
                    <Link href="/" style={{ color: "white" }}>
                        Início
                    </Link>

                    <Link href="/rota1" style={{ color: "white" }}>
                        Rota 1
                    </Link>

                    <Link href="/novarota" style={{ color: "white" }}>
                        Nova Rota
                    </Link>
                </nav>

                {children}
            </body>
        </html>
    );
}