export default function NovaRotaLayout({ children }) {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif"
        }}>
            <header style={{
                backgroundColor: "#9b4560",
                color: "white",
                padding: "20px",
                textAlign: "center"
            }}>
                <h2>Área da Nova Rota</h2>
            </header>

            {children}
        </div>
    );
}