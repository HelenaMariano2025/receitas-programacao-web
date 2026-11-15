
import FormularioPesquisa from "../movieSearch/FormularioPesquisa";

export default function MoviesLayout({ children }) {
    return (
        <div style={{
            backgroundColor: "#f8f4f2",
            minHeight: "100vh",
            padding: "30px 20px",
            fontFamily: "Arial, sans-serif"
        }}>
            <FormularioPesquisa />

            {children}
        </div>
    );
}
